const initDataSet = () => (
  {
    'todos' : ['React study', 'play game', 'clean my room'],
    'completeList' : ['meeting']
  }
)
export const fakeInitData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(initDataSet());
    }, 800);
  });
}