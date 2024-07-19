tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}
tellraw @s {"color":"gray","bold":false,"text":" ","extra":[{"color":"gray","bold":false,"translate":"Advancement Scoreboard Display Settings"}]}

tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}

# Scoreboards
tellraw @s ["",{"text":"[ »» ]","color":"green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advancements"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The Advancements Scoreboard keeps track of how many advancements each player has obtained","color":"#D1FFFD"},{"text":"\n"},{"text":"bac_advancements","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended when NOT using Cooperative Mode","color":"yellow"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"Advancements Scoreboard"}]
tellraw @s ["",{"text":"[ »» ]","color":"yellow","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advfirst"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The First Advancements Scoreboard keeps track of how many advancements each player was the first to obtain","color":"#D1FFFD"},{"text":"\n"},{"text":"bac_advfirst","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended for Cooperative Mode","color":"green"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"First Advancements Scoreboard"}]

tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}

# Team Scoreboards
tellraw @s ["",{"text":"[ »» ]","color":"aqua","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advancements_team"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The Team Advancements Scoreboard lists every team, and adds up the Advancements score of every member in each team","color":"#D1FFFD"},{"text":"\n"},{"translate":"For example, if Alex and Steve are on Blue team and both have 100 advancements, Blue team would be listed as 200","color":"aqua"},{"text":"\n"},{"text":"bac_advancements_team","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended when NOT using Cooperative or Team Cooperative Mode","color":"yellow"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"Team Advancements"}]
tellraw @s ["",{"text":"[ »» ]","color":"dark_aqua","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advfirst_team_sum"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The Total Team Advancements Scoreboard lists every team, and counts how many advancements have been obtained by any member in each team","color":"#D1FFFD"},{"text":"\n"},{"translate":"For example, if Alex and Steve are on Blue team and both have 100 advancements, but 50 of them are advancements they both got, Blue team would be listed as 150","color":"aqua"},{"text":"\n"},{"text":"bac_advfirst_team_sum","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended for Team Cooperative Mode","color":"green"},{"text":"\n"},{"translate":"Not recommended for Cooperative Mode","color":"red"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"Total Team Advancements"}]
tellraw @s ["",{"text":"[ »» ]","color":"blue","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advfirst_sum"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The Team First Advancements Scoreboard lists every team, and adds up the First Advancements score of every member in each team","color":"#D1FFFD"},{"text":"\n"},{"translate":"For example, if Alex and Steve are on Blue team and both were the first to get 100 advancements, Blue team would be listed as 200","color":"aqua"},{"text":"\n"},{"text":"bac_advfirst_sum","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended for Cooperative or Team Cooperative Mode","color":"green"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"Team First Advancements"}]
tellraw @s ["",{"text":"[ »» ]","color":"dark_blue","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/scoreboard_bac_advfirst_team"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"The First Advancements in Team Scoreboard lists every player, and counts how many advancements they were the first to get out of everyone on their team","color":"#D1FFFD"},{"text":"\n"},{"translate":"For example, if Alex and Steve are on Blue team and Steve gets 'Monster Hunter', Steve will have this score increase by 1, but when Alex gets it they won't. If Bob is on Red team and gets 'Monster Hunter' after Steve did, they will have this score increase by 1","color":"aqua"},{"text":"\n"},{"text":"bac_advfirst_team","color":"dark_purple","italic":true},{"text":"\n\n"},{"translate":"Recommended for Team Cooperative Mode","color":"green"},{"text":"\n"},{"translate":"Click to display","italic":true,"color":"gold"}]}}," ",{"translate":"First Advancements in Team"}]

tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}

# Clear Scoreboards
tellraw @s ["",{"text":"[ »» ]","color":"red","clickEvent":{"action":"run_command","value":"/scoreboard objectives setdisplay list"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to clear","color":"gold"}]}}," ",{"translate":"Clear scoreboard from tab list"}]
tellraw @s ["",{"text":"[ »» ]","color":"red","clickEvent":{"action":"run_command","value":"/scoreboard objectives setdisplay sidebar"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to clear","color":"gold"}]}}," ",{"translate":"Clear scoreboard from sidebar"}]
tellraw @s ["",{"text":"[ »» ]","color":"red","clickEvent":{"action":"run_command","value":"/scoreboard objectives setdisplay below_name"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to clear","color":"gold"}]}}," ",{"translate":"Clear scoreboard from below player names"}]

tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}

# Go back
tellraw @s ["",{"text":"[ «« ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}," ",{"translate":"Go back to main config menu"}]

tellraw @s {"text":"                                             ","color":"dark_gray","strikethrough":true}
