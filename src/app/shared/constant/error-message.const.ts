export const ErrorMessageConst = {
  USERNAME: [
    {
      type: 'required',
      message: 'Please enter username'
    },
    {
      type: 'minlength',
      message: 'Minimum {0} characters required'
    },
    {
      type: 'maxlength',
      message: 'Maximum {0} characters allowed'
    }
  ],
  PASSWORD: [
    {
      type: 'required',
      message: 'Please enter password'
    }
  ]
};
