export function calculateAge(birthday: string): number | string {
  if (!birthday) return birthday;

  const [day, month, year] = birthday.split('-').map(Number);
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  let age = today.getFullYear() - birthDate.getFullYear();

  if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
    age--;
  }

  return age;
}
