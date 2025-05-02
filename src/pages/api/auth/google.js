import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

/**
 * Handles Google OAuth callback, decodes JWT, checks user in DB, and sets session/cookie.
 * @param {object} response - Google OAuth response (with .credential)
 * @param {object} userProfile - Vue ref to store user profile
 * @param {object} showSchoolForm - Vue ref to boolean for showing school form
 * @param {object} userSession - Vue ref for user session
 * @param {object} router - Vue router instance
 * @returns {Promise<void>}
 */
export async function handleGoogleCallback(
  response,
  userProfile,
  showSchoolForm,
  userSession,
  router
) {
  if (response?.credential) {
    try {
      const decoded = jwtDecode(response.credential);
      userProfile.value = {
        name: decoded.name,
        email: decoded.email,
        imageUrl: decoded.picture,
      };
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      throw new Error('Failed to process Google login');
    }
  }

  const dbResponse = await fetch(
    `/api/db/get_user?email=${userProfile.value.email}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );

  if (!dbResponse.ok) {
    const errorData = await dbResponse.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to retrieve user data');
  }

  const dbData = await dbResponse.json();

  if (!dbData || !dbData.email) {
    showSchoolForm.value = true;
  } else {
    Cookies.set(
      'audemyUserSession',
      JSON.stringify({
        token: response.credential,
        user: userProfile.value,
      }),
      {
        expires: 7,
      }
    );
    userSession.value = {
      token: response.credential,
      user: userProfile.value,
    };

    router.push('/game-zone');
  }
}

/**
 * Updates the user's school in the DB and sets session/cookie.
 * @param {object} school - Vue ref to school name string
 * @param {object} userProfile - Vue ref to user profile
 * @param {object} OAuthResponse - Vue ref to OAuth token/credential
 * @param {object} userSession - Vue ref for user session
 * @param {object} showSchoolForm - Vue ref for showing/hiding school form
 * @param {object} router - Vue router instance
 * @returns {Promise<void>}
 */
export async function handleSchoolUpdate(
  school,
  userProfile,
  OAuthResponse,
  userSession,
  showSchoolForm,
  router
) {
  if (!school.value) {
    throw new Error('Please enter your school name.');
  }

  const response = await fetch(`/api/db/update_user_school`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: userProfile.value.email,
      name: userProfile.value.name,
      school: school.value,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to update school information');
  }

  const data = await response.json();

  if (data.success) {
    Cookies.set(
      'audemyUserSession',
      JSON.stringify({
        token: OAuthResponse.value,
        user: userProfile.value,
      }),
      {
        expires: 7,
      }
    );
    userSession.value = {
      token: OAuthResponse.value,
      user: userProfile.value,
    };
    showSchoolForm.value = false;
    router.push('/game-zone');
  } else {
    throw new Error(data.message || 'Failed to update school information');
  }
}
