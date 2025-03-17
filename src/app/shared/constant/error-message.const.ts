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
    },
    {
      type: 'pattern',
      message:
        'Password must be atleast eight character with uppercase, lowercase, number & special character'
    }
  ],
  CONFIRM_PASSWORD: [
    {
      type: 'required',
      message: 'Please enter password'
    },
    { type: 'mismatch', message: 'Passwords do not match' }
  ],
  NAME: [
    {
      type: 'required',
      message: 'Please enter name'
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
  LABEL: [
    {
      type: 'required',
      message: 'Please enter label'
    },
    {
      type: 'minlength',
      message: 'Minimum {0} characters required'
    },
    {
      type: 'maxlength',
      message: 'Maximum {0} characters allowed'
    }
  ]
};
