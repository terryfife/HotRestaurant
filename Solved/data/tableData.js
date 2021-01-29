// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.

const tableArray = [
  {
    customerName: 'Dennis',
    customerEmail: 'dennis@dennis.com',
    customerID: 'dennis',
    phoneNumber: '000-000-1325',
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
