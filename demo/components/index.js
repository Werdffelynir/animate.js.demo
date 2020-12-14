import Start from './src/Start';

if (location.pathname.split('/').filter((v) => v).reverse()[0] === 'components') {
    Start();
}