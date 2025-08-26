// console.log("Hello world!");

const partner = {
  firstName: 'Shah Nawaz',
  lastName: 'Sahib',
  marrietalStatus: 'Married',
  jobStatus: 'Employed',
  job: 'Developer'
}

// alert(partner.firstName + ' ' + partner.lastName );

// let khanSaib = document.querySelector('.heading');
// khanSaib.addEventListener('click', () => {
//   alert('My Partner is ' + partner.firstName + ' ' + partner.lastName);
//   khanSaib.style.color = 'green';
//   khanSaib.style.textAlign = 'left';

//     console.log('khanSaib is the BEST Designer');
  
// })

console.log(partner.firstName + ' ' + partner.lastName + ' is ' + partner.marrietalStatus);

// prompt(partner.firstName + ' ' + partner.lastName + ' is ' + partner.jobStatus + ' as a ' + partner.job);

// const aboutSaib = prompt(`is ${partner.firstName + ' ' + partner.lastName} a developer ? Reply with a Yes or No. Thanks`);

// const aboutSaib = prompt(`What do you want to know about ${partner.firstName + ' ' + partner.lastName}. jobStatus,  job or marrietalStatus. Thanks`)
// console.log(aboutSaib);
// console.log(partner.aboutSaib);
// console.log(partner[aboutSaib]);

const yesNoSaib = prompt(`Do you want to know about ${partner.firstName + ' ' + partner.lastName} ' ? ' Write Yes or No. Thanks`);
// console.log(yesNoSaib);
console.log(partner[yesNoSaib]);