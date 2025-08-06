import axios from 'axios';

export async function createTestPatient(token: string) {
  const response = await axios.post(
    'https://api.healthportal.example.com/patients',
    {
      name: 'John Doe',
      dob: '1980-01-01',
      id: 'PAT-000123',
    },
    {
      headers: {
        Authorization: 'Bearer ${token}',
      },
    }
  );
  return response.data;
}