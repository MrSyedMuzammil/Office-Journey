const partner = {
  firstName: 'ShahNawaz',
  lastName: ' Saib',
  friends: ['Syed Muzammil', 'Shakir Saib', 'norMates'],
  birthYear: 2005,
  job: 'Developer',
  driversLicense: true,
  age: 2025 - this.birthYear,

  getAge: function() {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${getAge()}-years old ${partner.job}, and he has ${this.driversLicense ? 'a' : 'no'} driver's license `
  }
}

console.log(`${partner.firstName} has ${partner.friends.length} friends, and his best friend is ${partner.friends[1]}`);

console.log(partner.getSummary());