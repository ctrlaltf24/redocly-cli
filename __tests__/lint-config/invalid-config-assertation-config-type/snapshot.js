// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config test with option: { dirName: 'invalid-config-assertation-config-type', option: 'error' } 1`] = `

[1] .redocly.yaml:8:17 at #/styleguide/rules/assert~1path-item-mutually-required/context/0/type

\`type\` can be one of the following only: "DefinitionRoot", "Tag", "ExternalDocs", "Server", "ServerVariable", "ServerVariableMap", "SecurityRequirement", "Info", "Contact", "License", "PathMap", "PathItem", "Parameter", "Operation", "Callback", "CallbackMap", "RequestBody", "MediaTypeMap", "MediaType", "Example", "ExampleMap", "Encoding", "EncodingMap", "Header", "HeaderMap", "ResponsesMap", "Response", "Link", "LinkMap", "Schema", "Xml", "SchemaProperties", "DiscriminatorMapping", "Discriminator", "Components", "NamedSchemas", "NamedResponses", "NamedParameters", "NamedExamples", "NamedRequestBodies", "NamedHeaders", "NamedSecuritySchemes", "NamedLinks", "NamedCallbacks", "ImplicitFlow", "PasswordFlow", "ClientCredentials", "AuthorizationCode", "SecuritySchemeFlows", "SecurityScheme", "XCodeSample", "WebhooksMap".

 6 | assert/path-item-mutually-required:
 7 |   context:
 8 |     - type: Invalid-type
   |             ^^^^^^^^^^^^
 9 |   subject: Operation
10 |   message: Operation should have summary and security fields simultaneously

Error was generated by the configuration spec rule.


❌ Your config has 1 error.
validating ../__fixtures__/valid-openapi.yaml...
../__fixtures__/valid-openapi.yaml: validated in <test>ms

Woohoo! Your OpenAPI definition is valid. 🎉


`;
