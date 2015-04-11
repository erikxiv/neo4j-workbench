# Neo4j Workbench

Single page app to browse Neo4j graphs

# URLs
- / - start
- /resource - list all resources (same as list all instances of Class Resource)
- /resource/:resource - show properties of a single resource (property view)
- /resource/:resource/follow/:property - list selected objects (table view, :resource :property ?x)
- /resource/:resource/reverse/:property - list selected subjects (table view, ?x :property :resource)
- /import - import page
- /export - export page

:id/:class - can be either a _term_, _prefix:resource_ or a full _IRI_
