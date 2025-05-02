import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

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
    console.log(data.user.user_id);
    const print = await fetch('/api/db/create_default_progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: data.user.user_id }),
    });
    console.log(print);
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
