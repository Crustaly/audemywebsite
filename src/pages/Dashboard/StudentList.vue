<!-- <template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Student</h1>
    <p class="text-gray-700">
      Here are the student details. You can view and manage student information.
    </p>
  </div>
</template>
<script>
export default { name: "studentList" };
</script> -->
<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Student</h1>
    <p class="text-gray-700 mb-4">
      Here are the student details. You can view and manage student information.
    </p>

    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
    </div>

    <div v-else-if="loading">
      <p>Loading...</p>
    </div>

    <div v-else>
      <p>User not found or error fetching data.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'studentList',
  data() {
    return {
      user: null,
      loading: true,
    };
  },
  async created() {
    const email = 'student@example.com'; // Replace with dynamic value if needed
    try {
      const response = await fetch(
        `/api/db/get_user?email=${encodeURIComponent(email)}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const data = await response.json();
      if (!data.error) {
        this.user = data;
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
