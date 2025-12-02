// scripts/makeAdmin.mjs
import admin from "firebase-admin";
import { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

const serviceAccount = await import(`file://${__dirname}/serviceAccountKey.json`, {
  assert: { type: "json" }
}).then(m => m.default);

// inicializar
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: "coffeeshop-54f57",
});

const auth = admin.auth();
// resto igual...


// UID do utilizador que queres tornar admin
const UID = "3SDZPpPpO0PFbsxxVGRIjNAkMc12";

async function makeAdmin() {
  try {
    console.log("🔍 A obter user no Firebase REAL…");

    const user = await auth.getUser(UID);

    console.log("👌 User encontrado:", user.email);

    await auth.setCustomUserClaims(UID, { role: "admin" });

    console.log("✔️ Admin aplicado com sucesso na PRODUÇÃO!");
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}

makeAdmin();
