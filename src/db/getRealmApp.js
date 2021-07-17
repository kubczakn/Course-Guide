
export function getRealmApp() {
  if (app === undefined) {
    const appId = "um-courses-ltcub"; 
    const appConfig = {
      id: appId,
      timeout: 10000,
      app: {
        name: "default",
        version: "0",
      },
    };
    app = new Realm.App(appConfig);
  }
  return app;
}