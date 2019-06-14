import { NgModule } from './node_modules/@angular/core';
import { HttpClientModule } from './node_modules/@angular/common/http';
import { Apollo, ApolloModule } from './node_modules/apollo-angular';
import { HttpLink, HttpLinkModule } from './node_modules/apollo-angular-link-http';
import { InMemoryCache} from './node_modules/apollo-cache-inmemory';

@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})


export class GraphQLModule {

  constructor(apollo: Apollo, httpLink: HttpLink) {

    const uri = 'http://localhost:4000/';
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
