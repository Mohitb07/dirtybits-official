export const customStyles = {
  singleValue: (provided: any) => ({
    ...provided,
    color: '#C1C2C0',
    border: '0',
  }),
  menuList: (base: any) => ({
    ...base,

    '::-webkit-scrollbar': {
      width: '6px',
      height: '0px',
    },
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '14px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  }),
  control: (styles: any, state: any) => ({
    ...styles,

    width: '100%',
    maxWidth: '14rem',
    minWidth: '12rem',
    borderRadius: '5px',
    border: '1',
    borderColor: state.isFocused ? '#6334CB' : '#373A40',
    color: '#C1C2C0',
    fontSize: '0.8rem',
    backgroundColor: '#25262B',
    cursor: 'pointer',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #6334CB',
    },
  }),
  option: (styles: any, state: any) => {
    return {
      ...styles,
      background: state.isSelected ? '#6334CB' : '#25262B',
      fontSize: '0.8rem',
      borderRadius: '4px',
      padding: '4px 10px',
      lineHeight: '1.75rem',
      width: '100%',
      ':hover': {
        backgroundColor: '#2C2E33',
        color: '#C1C2C0',
        cursor: 'pointer',
      },
    };
  },
  menu: (styles: any) => {
    return {
      ...styles,

      backgroundColor: '#25262B',
      maxWidth: '14rem',
      borderRadius: '5px',
    };
  },

  placeholder: (defaultStyles: any) => {
    return {
      ...defaultStyles,
      color: '#C1C2C0',
      fontSize: '0.8rem',
    };
  },
};
