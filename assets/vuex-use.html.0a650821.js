const e=JSON.parse(`{"key":"v-4b192ff7","path":"/posts/notes/vue/vue3/vuex-use.html","title":"Vuex\u4F7F\u7528","lang":"zh-CN","frontmatter":{"title":"Vuex\u4F7F\u7528","description":"\u5982\u4F55\u4F7F\u7528js\u5C06\u8868\u5355\u9009\u4E2D\u7684\u6587\u4EF6\u8F6C\u5316\u4E3ABase64\u7F16\u7801\u683C\u5F0F  Vuex\u5B66\u4E60\u7B14\u8BB0","isOriginal":true,"icon":"vue","date":"2022-08-10T00:00:00.000Z","category":["\u6211\u7684\u5B66\u4E60\u7B14\u8BB0","Vue3","Vuex"],"tag":["vue3","vuex"],"sticky":false,"star":false,"article":true,"timeline":true,"head":[["meta",{"property":"og:url","content":"https://ivwv.github.io/posts/notes/vue/vue3/vuex-use.html"}],["meta",{"property":"og:site_name","content":"Jin's Blog"}],["meta",{"property":"og:title","content":"Vuex\u4F7F\u7528"}],["meta",{"property":"og:description","content":"\u5982\u4F55\u4F7F\u7528js\u5C06\u8868\u5355\u9009\u4E2D\u7684\u6587\u4EF6\u8F6C\u5316\u4E3ABase64\u7F16\u7801\u683C\u5F0F  Vuex\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-02T07:25:49.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:restrictions:age","content":"10+"}],["meta",{"property":"article:author","content":"SY"}],["meta",{"property":"article:tag","content":"vue3"}],["meta",{"property":"article:tag","content":"vuex"}],["meta",{"property":"article:published_time","content":"2022-08-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-02T07:25:49.000Z"}]]},"excerpt":"<CountView></CountView>\\n<blockquote>\\n<p>Vuex\u5B66\u4E60\u7B14\u8BB0</p>\\n</blockquote>\\n","headers":[{"level":2,"title":"\u5BF9\u4E8Evuex\u7684\u7406\u89E3","slug":"\u5BF9\u4E8Evuex\u7684\u7406\u89E3","children":[{"level":3,"title":"\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F","slug":"\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F","children":[]},{"level":3,"title":"\u4EC0\u4E48\u60C5\u51B5\u4E0B\u6211\u5E94\u8BE5\u4F7F\u7528Vuex?","slug":"\u4EC0\u4E48\u60C5\u51B5\u4E0B\u6211\u5E94\u8BE5\u4F7F\u7528vuex","children":[]}]},{"level":2,"title":"vuex\u6982\u8FF0","slug":"vuex\u6982\u8FF0","children":[{"level":3,"title":"\u4F7F\u7528 Vuex \u7EDF\u4E00\u7BA1\u7406\u72B6\u6001\u7684\u597D\u5904","slug":"\u4F7F\u7528-vuex-\u7EDF\u4E00\u7BA1\u7406\u72B6\u6001\u7684\u597D\u5904","children":[]},{"level":3,"title":"\u4EC0\u4E48\u6837\u7684\u6570\u636E\u9002\u5408\u5B58\u50A8\u5728 vuex\u4E2D","slug":"\u4EC0\u4E48\u6837\u7684\u6570\u636E\u9002\u5408\u5B58\u50A8\u5728-vuex\u4E2D","children":[]}]},{"level":2,"title":"Vuex \u7684\u57FA\u672C\u4F7F\u7528","slug":"vuex-\u7684\u57FA\u672C\u4F7F\u7528","children":[{"level":3,"title":"1.\u5B89\u88C5 vuex \u4F9D\u8D56\u5305","slug":"_1-\u5B89\u88C5-vuex-\u4F9D\u8D56\u5305","children":[]},{"level":3,"title":"2.\u5BFC\u5165vuex\u5305","slug":"_2-\u5BFC\u5165vuex\u5305","children":[]},{"level":3,"title":"3.\u521B\u5EFAstore\u5BF9\u8C61","slug":"_3-\u521B\u5EFAstore\u5BF9\u8C61","children":[]},{"level":3,"title":"4.\u5C06store\u5BF9\u8C61\u6302\u8F7D\u5230vue\u5B9E\u4F8B\u4E2D","slug":"_4-\u5C06store\u5BF9\u8C61\u6302\u8F7D\u5230vue\u5B9E\u4F8B\u4E2D","children":[]}]},{"level":2,"title":"\u5728vite\u4E2D\u4F7F\u7528","slug":"\u5728vite\u4E2D\u4F7F\u7528","children":[{"level":3,"title":"\u521B\u5EFAvite\u9879\u76EE\u5E76\u5B89\u88C5\u4F9D\u8D56","slug":"\u521B\u5EFAvite\u9879\u76EE\u5E76\u5B89\u88C5\u4F9D\u8D56","children":[]},{"level":3,"title":"\u5B89\u88C5vuex","slug":"\u5B89\u88C5vuex","children":[]},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528","children":[]}]},{"level":2,"title":"Vuex\u7684\u6838\u5FC3\u6982\u5FF5","slug":"vuex\u7684\u6838\u5FC3\u6982\u5FF5","children":[{"level":3,"title":"State","slug":"state","children":[]},{"level":3,"title":"Mutation","slug":"mutation","children":[]},{"level":3,"title":"Action","slug":"action","children":[]},{"level":3,"title":"Getter","slug":"getter","children":[]}]}],"readingTime":{"minutes":12.07,"words":3622},"filePathRelative":"posts/notes/vue/vue3/vuex-use.md","localizedDate":"2022\u5E748\u670810\u65E5","git":{"createdTime":1669965949000,"updatedTime":1669965949000,"contributors":[{"name":"Jin","email":"439661734@qq.com","commits":1}]}}`);export{e as data};
