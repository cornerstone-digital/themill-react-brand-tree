const initialState = [
  {
    title: 'Unilever',
    childNodes: [
      {
        title: 'Dove',
        childNodes: [
          {
            title: 'Axe',
            timestamps: [
              1460764937,
              1460851337
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'P&G',
    childNodes: [
      {
        title: 'Gillette',
        childNodes: [
          {
            title: 'Fusion ProGlide',
            timestamps: [
              1460764937
            ]
          }
        ]
      }
    ]
  }
];

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  console.log(action);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
    case 'ADD_ITEM': {
      //const itemExists = false;
      return state;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
};
