import axios from "axios";

const VESBridge = axios.create({
  baseURL: "http://127.0.0.1:3010/api",
  timeout: 5000,
});

async function testBackend() {
  console.log("[SPP] Executing VESBridge test...");
  try {
    const res = await VESBridge.get("/spp/health");
    console.log("[VESBridge] Backend OK:", res.data);
  } catch (err) {
    console.error("[VESBridge] Backend connection failed:", err.message);
  } finally {
    console.log("[SPP] Test complete.");
    process.stdout.write("", () => process.exit(0));
  }
}

testBackend();
