const Nightmare = require("nightmare"),
  nightmare = Nightmare({
    show: process.env.NODE_ENV == "development" || false
  });

console.log("Nightmare script started");
console.log("==========");
(async () => {
  await nightmare
    .goto("https://www2.mudah.my/useraccount.html")
    .wait("#btn_signin")
    .type("#email", "")
    .type("#passwd", "")
	.click("#btn_signin")
	.wait("#main-display")
    .evaluate(() => document.querySelector("#main-display").textContent)
    .end()
    .then(console.log)
    .catch(error => {
      console.error("Search failed:", error);
    });

  // console.log(
  // 	await nightmare.evaluate(() =>
  // 		document.querySelector('.useraccount').textContent
  // 	)
  // )

  console.log("=========");
  console.log("All done");

  await nightmare.end().catch(error => console.error(error));
})();
