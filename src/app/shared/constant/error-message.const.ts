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
  ],
  EMAIL: [
    {
      type: 'required',
      message: 'Please enter email'
    },
    {
      type: 'pattern',
      message: 'Invalid email address'
    }
  ],
  PHONENUMBER: [
    {
      type: 'required',
      message: 'Please enter phone number'
    },
    {
      type: 'minlength',
      message: 'Invalid phone number'
    },
    {
      type: 'maxlength',
      message: 'Invalid phone number'
    }
  ],
  ROLE: [
    {
      type: 'required',
      message: 'Please select role'
    }
  ],
  PERMISSION: [
    {
      type: 'required',
      message: 'Please select atleast one permission'
    }
  ]
};
