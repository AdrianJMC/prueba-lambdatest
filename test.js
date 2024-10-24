const { remote } = require('webdriverio');

let options = {
  capabilities: {
    platformName: "Windows 10",
    browserName: "chrome",
    browserVersion: "latest",
    "LT:Options": {
      user: "derrapo24",      // Tu nombre de usuario de LambdaTest
      accessKey: "y2JfhH9c96MmEbR3sKiL7KpE4B8eHxpUhTyIJ9c3KTwuootbC2", // Tu clave de acceso de LambdaTest
      build: "LambdaTest-Sample Build",
      name: "HyperExecute Sample Test",
      platformName: "Windows 10"
    }
  }
};

async function runTest() {
  const browser = await remote(options);

  // Navegar a Amazon México
  await browser.url('https://www.amazon.com.mx/');

  // Ingresar un término de búsqueda en el campo de búsqueda
  const searchBox = await browser.$('#twotabsearchtextbox');
  await searchBox.setValue('laptop');

  // Hacer clic en el botón de búsqueda
  const searchButton = await browser.$('#nav-search-submit-button');
  await searchButton.click();

  // Verificar que los resultados de la búsqueda sean correctos
  const firstResult = await browser.$('.s-title-instructions-style');
  const text = await firstResult.getText();
  console.log(text.toLowerCase().includes('laptop') ? 'Test Passed' : 'Test Failed');

  await browser.deleteSession();
}

runTest().catch(console.error);
