import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    projectId: "coffeeshop-54f57",
  });
}

const auth = admin.auth();

const UID = "3SDZPpPpO0PFbsxxVGRIjNAkMc12";

async function makeAdmin() {
  try {
    console.log("🔍 A obter user do Emulator…");

    const user = await auth.getUser(UID);

    console.log("👌 User encontrado:", user.email);

    await auth.setCustomUserClaims(UID, { role: "admin" });

    console.log("✔️ Admin aplicado com sucesso!");
  } catch (err) {
    console.error("❌ Erro:", err);
  }
}

makeAdmin();
