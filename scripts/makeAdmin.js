import admin from "firebase-admin";
import { readFileSync } from "fs";

// caminho ABSOLUTO fora do projeto (100% seguro)
const serviceAccount = JSON.parse(
  readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
);


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const auth = admin.auth();
const UID = "3SDZPpPpO0PFbsxxVGRIjNAkMc12";

async function makeAdmin() {
  try {
    console.log("🔍 A obter user…");

    const user = await auth.getUser(UID);
    console.log("👌 User encontrado:", user.email);

    await auth.setCustomUserClaims(UID, { role: "admin" });

    console.log("✔️ Admin aplicado com sucesso!");
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}

makeAdmin();
