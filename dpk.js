const crypto = require("crypto");

// this function with return key if partition key is provided other wise with generate
const getPartitionKey = (event) => {
  if (event.partitionKey) return event.partitionKey;

  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    candidate = getPartitionKey(event);
  }

  //if candition is null add "0" as default value
  if (!candidate) candidate = TRIVIAL_PARTITION_KEY;

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getPartitionKey(candidate);
  }
  return candidate;
};
