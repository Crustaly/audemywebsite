import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

export async function handleGoogleCallback(
  response,
  userProfile,
  userSession,
  showSchoolForm,
  router,
  showErrorAlert
) {
  const OAuthResponse = response.credential;
  if (OAuthResponse) {
    try {
      const decoded = jwtDecode(OAuthResponse);
      userProfile.value = {
        name: decoded.name,
        email: decoded.email,
        imageUrl: decoded.picture,
      };
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      showErrorAlert('Failed to process Google login');
      return;
    }
  }

  const dbResponse = await fetch(
    `/api/db/get_user?email=${userProfile.value.email}`
  );
  if (!dbResponse.ok) {
    const errorData = await dbResponse.json().catch(() => ({}));
    showErrorAlert(errorData.message || 'Failed to retrieve user data');
    return;
  }

  const dbData = await dbResponse.json();

  if (!dbData?.email) {
    showSchoolForm.value = true;
  } else {
    Cookies.set(
      'audemyUserSession',
      JSON.stringify({
        token: OAuthResponse,
        user: userProfile.value,
      }),
      { expires: 7 }
    );

    userSession.value = {
      token: OAuthResponse,
      user: userProfile.value,
    };
    router.push('/game-zone');
  }
}

export async function updateSchoolInfo(
  school,
  userProfile,
  userSession,
  showSchoolForm,
  router,
  showErrorAlert
) {
  if (!school.value) {
    alert('Please enter your school name.');
    return;
  }

  try {
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
      showErrorAlert(
        errorData.message || 'Failed to update school information'
      );
      return;
    }

    Cookies.set(
      'audemyUserSession',
      JSON.stringify({
        token: Cookies.get('audemyUserSession')?.token,
        user: userProfile.value,
      }),
      { expires: 7 }
    );

    userSession.value = {
      token: Cookies.get('audemyUserSession')?.token,
      user: userProfile.value,
    };

    showSchoolForm.value = false;
    router.push('/game-zone');
  } catch (error) {
    console.error('Error updating school:', error);
    showErrorAlert('Connection error: Please check your internet connection');
  }
}
