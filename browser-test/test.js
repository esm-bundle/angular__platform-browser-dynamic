describe("@esm-bundle/angular__platform-browser-dynamic", () => {
  ["es2015", "es2020"].forEach((ecma) => {
    it(`can load the System.register ${ecma} bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-platform-browser-dynamic.js`
      );
      expect(m.platformBrowserDynamic).toBeDefined();
    });

    it(`can load the System.register ${ecma} prod bundle`, async () => {
      const m = await System.import(
        `/base/system/${ecma}/ivy/angular-platform-browser-dynamic.min.js`
      );
      expect(m.platformBrowserDynamic).toBeDefined();
    });
  });
});
