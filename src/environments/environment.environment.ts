import packageJson from '../../package.json';

export const environment = {
  appVersion: packageJson.version,
  production: false,
  appLogo: "../assets/icones/logo.png",
  srcIcon: "../assets/icones/"
};
