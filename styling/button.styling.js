import styling from 'styling';

export let container = styling({
  textAlign: 'center'
});

export let button = styling({
  backgroundColor: '#ff0000',
  width: 320,
  padding: 20,
  borderRadius: 5,
  border: 'none',
  outline: 'none',
  'hover': {
    color: '#fff',
  },
  'active': {
    position: 'relative',
    top: 2
  }
});
