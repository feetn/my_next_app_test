export class AppConfig {
    public static PORT_NUMBER = 3000
    public static MAX_REQUEST_SIZE = 20000000
    public static COSMOSDB_CONFIG = {
      endpoint: "https://test-sql.documents.azure.com:443/",
      key: "GjqXjzbIxJXiXWXzSmG2zPnAeB8YNAfvNNCIs4G0OhdvHaiT7ng4HEESLYtibSPnu4St8FLaVcXVTUsIXu2vSg==",
      databaseId: "ToDoList",
      containerId: "Items",
      partitionKey: { kind: "Hash", paths: ["/category"] }
    }
  }