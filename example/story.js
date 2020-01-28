sadako.story = {"init":{"0":[{"t":"[:& \r\n\t\t\t$.message = 0;\r\n\t\t\t$.cloak_worn = true;\r\n\t\t\tsadako.add($.items, \"cloak\");\r\n\t\t:]\r"},{"t":"Hurrying through the rainswept November night, you're glad to see the bright lights of the Opera House. It's surprising that there aren't more people about but, hey, what do you expect in a cheap demo game...\r"},{"t":"<i>This demo is based on <a target=\"_blank\" href=\"http://www.firthworks.com/roger/cloak/\">Cloak of Darkness</a> by Roger Firth.</i>\r"},{"t":"[Start]","k":"\\+"}],"0.3":[{"t":">> #foyer\r"}]},"inventory":{"0":[{"t":"[:= game.listInventory():]\r"}]},"foyer":{"0":[{"t":"(:title \"Foyer\":)\r"},{"t":"[:& _.foyer = (sadako.has($.items, \"cloak\")) ? \"darkness\" : \"foyer_bar\":]\r"},{"t":"You are standing in a spacious hall, splendidly decorated in red and gold, with glittering chandeliers overhead. The entrance from the street is to the [:% north:], and there are doorways [:#= _.foyer @: south:] and [:cloakroom @: west:].\r"},{"t":"[:% foyer.north @: Entrance:] ~:choice :: %.foyer.north\r"},{"t":"[:#= _.foyer @: Foyer Bar:] ~:choice :: #.foyer_bar\r"},{"t":"[:cloakroom @: Cloakroom:] ~:choice :: #.cloakroom\r"},{"t":"<< END\r"},{"t":"north\r","k":"=","l":"foyer.north"},{"t":"You've only just arrived, and besides, the weather outside seems to be getting worse. \r"},{"t":"[Back]","k":"\\+"}],"0.9":[{"t":"<< RETURN\r"}]},"cloakroom":{"0":[{"t":"(:title \"Cloakroom\":)\r"},{"t":"The walls of this small room were clearly once lined with [:% hooks:], though now only one remains. The exit is a door to the [:foyer @: east:].\r"},{"t":"[:& $.hooks = false:]\r"},{"t":"[:foyer @: Foyer:] ~:choice\r"},{"t":"<< END\r"},{"t":"hooks\r","k":"=","l":"cloakroom.hooks"},{"t":"[:& $.hooks = true:]\r"},{"t":"It's just a small brass hook, <> \r"},{"t":"{:sadako.has($.items, \"cloak\")::screwed to the wall.::with a [:% cloak:] hanging on it.:}\r"},{"t":"[Back]","k":"\\+"},{"t":"cloak\r","k":"=","l":"cloakroom.cloak"},{"t":">> cloak.take"},{"t":">> hooks\r"}],"0.9":[{"t":"<< RETURN\r"}]},"cloak":{"0":[{"t":">> examine\r"},{"t":"<< END\r"},{"t":"desc\r","k":"=","l":"cloak.desc"},{"t":"A handsome cloak, of velvet trimmed with satin, and slightly spattered with raindrops. Its blackness is so deep that it almost seems to suck light from the room.\r"},{"t":"<<\r"},{"t":"examine\r","k":"=","l":"cloak.examine"},{"t":">> desc\r"},{"t":"[Wear] :: !$.cloak_worn\r","k":"\\+"},{"t":"[Remove] :: $.cloak_worn\r","k":"\\+"},{"t":"[Hang] :: $.room === \"cloakroom\"\r","k":"\\+"},{"t":"[Drop] :: $.room !== \"cloakroom\"\r","k":"\\+"},{"t":"","k":"\\-"},{"t":"[Back] ","k":"\\+"},{"t":"take\r","k":"=","l":"cloak.take"},{"t":">> desc\r"},{"t":"[Take Cloak] :: !sadako.has($.items, \"cloak\")\r","k":"\\+"},{"t":"[Back]\r","k":"\\+"},{"t":"<<\r","k":"\\-"}],"0.7":[{"t":"You put on the cloak.\r"},{"t":"[:& $.cloak_worn = true:]\r"}],"0.8":[{"t":"You remove the cloak.\r"},{"t":"[:& $.cloak_worn = false:]\r"}],"0.9":[{"t":"You put the velvet cloak on the small brass hook.\r"},{"t":"[:& \r\n\t\t\t\t$.cloak_worn = false;\r\n\t\t\t\tsadako.remove($.items, \"cloak\");\r\n\t\t\t\tsadako.onDialogClose = function() { if ($.hooks) sadako.doLink('cloakroom.hooks'); }\r\n\t\t\t:]\r"},{"t":"[:& sadako.closeDialog() @: Back:] ~:choice\r"},{"t":"<< END\r"}],"0.10":[{"t":"This isn't the best place to leave a smart cloak lying around.\r"}],"0.12":[{"t":"<< RETURN\r"}],"0.15":[{"t":"[:& sadako.add($.items, \"cloak\"):]\r"},{"t":"You remove the cloak from the hook.\r"},{"t":"[Back]\r","k":"\\+"}]},"darkness":{"0":[{"t":"(:title \"Darkness\":)\r"},{"t":"It is pitch dark, and you can't see a thing.\r"},{"t":"[North]","k":"\\+"},{"t":"[South]","k":"\\+"},{"t":"[East]","k":"\\+"},{"t":"[West]\r","k":"\\+"},{"t":"","k":"\\-"},{"t":"In the dark? You could easily disturb something! :: $.message === 0\r"},{"t":"Blundering around in the dark isn't a good idea! :: $.message >= 1\r"},{"t":"[:& $.message += 1:]\r"},{"t":"[Back]","k":"\\+"}],"0.2":[{"t":">> #foyer\r"}],"0.10":[{"t":"<< RETURN\r"}]},"foyer_bar":{"0":[{"t":"(:title \"Foyer Bar\":)\r"},{"t":"The bar, much rougher than you'd have guessed after the opulence of the foyer to the [:foyer @: north:], is completely empty. There seems to be some sort of [:% message:] scrawled in the sawdust on the floor.\r"},{"t":"[:foyer @: Foyer:] ~:choice\r"},{"t":"<< END\r"},{"t":"message\r","k":"=","l":"foyer_bar.message"},{"t":"if ($.message < 2)\r","k":"~"},{"t":"else\r","k":"~"}],"0.5":[{"t":"The message, neatly marked in the sawdust, reads...\r"},{"t":"*** You Won! ***\r"}],"0.6":[{"t":"The message has been carelessly trampled, making it difficult to read. You can just distinguish the words...\r"},{"t":"*** You Lost! ***\r"}]},"story_data":{"tags":{"init":{},"inventory":{},"foyer":{},"cloakroom":{},"cloak":{},"darkness":{},"foyer_bar":{}},"labels":{"foyer.north":["foyer","0",7],"cloakroom.hooks":["cloakroom","0",5],"cloakroom.cloak":["cloakroom","0",10],"cloak.desc":["cloak","0",2],"cloak.examine":["cloak","0",5],"cloak.take":["cloak","0",13],"foyer_bar.message":["foyer_bar","0",4]},"depths":{"cloakroom.0.9":["cloakroom","0",10],"cloak.0.7":["cloak","0",11],"cloak.0.8":["cloak","0",11],"cloak.0.9":["cloak","0",11],"cloak.0.10":["cloak","0",11],"cloak.0.12":["cloak","0",13],"cloak.0.15":["cloak","0",17],"cloak.0.16":["cloak","0",17],"darkness.0.2":["darkness","0",6],"darkness.0.3":["darkness","0",6],"darkness.0.4":["darkness","0",6],"darkness.0.5":["darkness","0",6]},"version":"0.9.2"}};