import React from 'react';
import { CosmosClient, Database, Container } from '@azure/cosmos';
import { AppConfig } from '../config/appConfig';

// export class TesTes {
//     public cosmosClient = require("@azure/cosmos").CosmosClient;
// }

// export class TesTes {
//     // public container = Database.container('aaa')// Container('');//database.container(containerId);
//     public aaa() => {
//         try {
//             const { endpoint, key, databaseId, containerId } = AppConfig.COSMOSDB_CONFIG;
//             const client: CosmosClient = new CosmosClient({ endpoint, key });
//             const database: Database = client.database(databaseId);
//             const container: Container = database.container(containerId);
//             const querySpec = {
//               query: "SELECT * FROM Items"
//             };
//             const { resources: items } = await container.items
//               .query(querySpec)
//               .fetchAll();
            
//         } catch(e) {
//             console.error(e.message);
//         }
//         return (

//         )
//     }
// }

export default function MyTestCosDB() {
    try {
        const { endpoint, key, databaseId, containerId } = AppConfig.COSMOSDB_CONFIG;
        const client: CosmosClient = new CosmosClient({ endpoint, key });
        const database: Database = client.database(databaseId);
        const container: Container = database.container(containerId);
        // const querySpec = {
        //   query: "SELECT * FROM Items"
        // };
        // const { resources: items } = await container.items
        //   .query(querySpec)
        //   .fetchAll();
        
        console.error(container.items);
        
        // return (
        //     <div>{'error'}</div>
        // )
    } catch(e) {
        console.error(e.message);
        // return (
        //     <div>{'error'}</div>
        // )
    }
}

// class MyTestCosDB extends React.Component {
    // render() {
    //     try {
    //         const { endpoint, key, databaseId, containerId } = AppConfig.COSMOSDB_CONFIG;
    //         const client: CosmosClient = new CosmosClient({ endpoint, key });
    //         const database: Database = client.database(databaseId);
    //         const container: Container = database.container(containerId);
    //         const querySpec = {
    //           query: "SELECT * FROM Items"
    //         };
    //         const { resources: items } = await container.items
    //           .query(querySpec)
    //           .fetchAll();
            
    //         return (
    //           <div>
    //             {this.props.name}さん。こんにちは。
    //           </div>
    //         );
    //     } catch(e) {
    //         console.error(e.message);
    //         return (
    //             <div>{'error'}</div>
    //         )
    //     }
    // }
    // render() {
    //     return (
    //       <div>
    //         {this.props.name}さん。こんにちは。
    //       </div>
    //     );
    //   }
// }

// export default MyTestCosDB;