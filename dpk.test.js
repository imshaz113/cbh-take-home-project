const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns ABC, when partition key is set to ABC", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "ABC" });
    expect(trivialKey).toBe("ABC");
  });

  it("Returns the trivalKey length to 128 when partication key is not provied", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBe(128);
  });
  it("Returns type should be string", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(typeof trivialKey).toBe("string");
  });
  it("Returns type not be object or number", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(typeof trivialKey).not.toBe("object");
    expect(typeof trivialKey).not.toBe("number");
  });
});
