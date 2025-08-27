INSERT INTO Sastojak (nazivSastojka, alergen, kategorija) VALUES  
-- Nuts & seeds (alergen: YES)
('Peanuts','YES','Legumes'),
('Soybeans','YES','Legumes'),
('Tree nuts - almond','YES','Nuts'),
('Tree nuts - hazelnut','YES','Nuts'),
('Tree nuts - walnut','YES','Nuts'),
('Tree nuts - cashew','YES','Nuts'),
('Tree nuts - pistachio','YES','Nuts'),
('Tree nuts - Brazil nut','YES','Nuts'),
('Tree nuts - macadamia','YES','Nuts'),
('Sesame','YES','Seeds'),

-- Dairy & eggs (alergen: YES)
('Milk','YES','Dairy'),
('Eggs','YES','Eggs'),

-- Fish & seafood (alergen: YES)
('Fish','YES','Fish'),
('Crustaceans','YES','Seafood'),
('Molluscs','YES','Seafood'),

-- Vegetables & spices (alergen: YES)
('Celery','YES','Vegetables'),
('Mustard','YES','Spices'),
('Sulphur dioxide and sulphites','YES','Additives'),
('Lupin','YES','Legumes'),

-- Meats -> NO
('Chicken breast','NO','Meat'),
('Chicken thigh','NO','Meat'),
('Beef steak','NO','Meat'),
('Beef mince','NO','Meat'),
('Pork loin','NO','Meat'),
('Pork ribs','NO','Meat'),
('Lamb chops','NO','Meat'),
('Duck breast','NO','Meat'),
('Turkey breast','NO','Meat'),
('Ham','NO','Meat'),
('Bacon','NO','Meat'),
('Salami','NO','Meat'),
('Prosciutto','NO','Meat'),
('Sausage','NO','Meat'),
('Chorizo','NO','Meat'),
('Hot dog sausage','NO','Meat'),
('Veal cutlet','NO','Meat'),
('Goat meat','NO','Meat'),
('Rabbit meat','NO','Meat'),
('Venison','NO','Meat'),

-- Fish & seafood (besides allergens) -> NO
('Tuna','NO','Fish'),
('Salmon','NO','Fish'),
('Trout','NO','Fish'),
('Cod','NO','Fish'),
('Mackerel','NO','Fish'),
('Sardines','NO','Fish'),
('Anchovies','NO','Fish'),
('Octopus','NO','Seafood'),
('Squid','NO','Seafood'),
('Clams','NO','Seafood'),
('Oysters','NO','Seafood'),
('Scallops','NO','Seafood'),
('Lobster','NO','Seafood'),
('Crab','NO','Seafood'),
('Prawns','NO','Seafood'),

-- Dairy -> NO
('Cheddar cheese','NO','Dairy'),
('Mozzarella','NO','Dairy'),
('Parmesan','NO','Dairy'),
('Gorgonzola','NO','Dairy'),
('Blue cheese','NO','Dairy'),
('Cream cheese','NO','Dairy'),
('Ricotta','NO','Dairy'),
('Feta cheese','NO','Dairy'),
('Yogurt','NO','Dairy'),
('Butter','NO','Dairy'),
('Cream','NO','Dairy'),
('Sour cream','NO','Dairy'),
('Whipped cream','NO','Dairy'),
('Condensed milk','NO','Dairy'),
('Powdered milk','NO','Dairy'),

-- Vegetables -> NO
('Tomato','NO','Vegetables'),
('Cherry tomato','NO','Vegetables'),
('Cucumber','NO','Vegetables'),
('Bell pepper','NO','Vegetables'),
('Chili pepper','NO','Vegetables'),
('Onion','NO','Vegetables'),
('Red onion','NO','Vegetables'),
('Garlic','NO','Vegetables'),
('Leek','NO','Vegetables'),
('Carrot','NO','Vegetables'),
('Potato','NO','Vegetables'),
('Sweet potato','NO','Vegetables'),
('Spinach','NO','Vegetables'),
('Lettuce','NO','Vegetables'),
('Iceberg lettuce','NO','Vegetables'),
('Kale','NO','Vegetables'),
('Cabbage','NO','Vegetables'),
('Broccoli','NO','Vegetables'),
('Cauliflower','NO','Vegetables'),
('Zucchini','NO','Vegetables'),
('Eggplant','NO','Vegetables'),
('Pumpkin','NO','Vegetables'),
('Green beans','NO','Vegetables'),
('Peas','NO','Vegetables'),
('Corn','NO','Vegetables'),
('Asparagus','NO','Vegetables'),
('Mushrooms','NO','Fungi'),
('Champignon','NO','Fungi'),
('Portobello','NO','Fungi'),
('Shiitake','NO','Fungi'),

-- Fruits -> NO
('Apple','NO','Fruits'),
('Pear','NO','Fruits'),
('Banana','NO','Fruits'),
('Orange','NO','Fruits'),
('Mandarin','NO','Fruits'),
('Lemon','NO','Fruits'),
('Lime','NO','Fruits'),
('Grapefruit','NO','Fruits'),
('Strawberry','NO','Fruits'),
('Raspberry','NO','Fruits'),
('Blueberry','NO','Fruits'),
('Blackberry','NO','Fruits'),
('Cherry','NO','Fruits'),
('Sour cherry','NO','Fruits'),
('Plum','NO','Fruits'),
('Peach','NO','Fruits'),
('Apricot','NO','Fruits'),
('Grape','NO','Fruits'),
('Watermelon','NO','Fruits'),
('Melon','NO','Fruits'),
('Kiwi','NO','Fruits'),
('Pineapple','NO','Fruits'),
('Mango','NO','Fruits'),
('Papaya','NO','Fruits'),
('Coconut','NO','Fruits'),
('Pomegranate','NO','Fruits'),

-- Grains & legumes -> NO
('Rice','NO','Grains'),
('Brown rice','NO','Grains'),
('Basmati rice','NO','Grains'),
('Couscous','NO','Grains'),
('Quinoa','NO','Grains'),
('Barley','NO','Grains'),
('Oats','NO','Grains'),
('Rye','NO','Grains'),
('Buckwheat','NO','Grains'),
('Millet','NO','Grains'),
('Chickpeas','NO','Legumes'),
('Lentils','NO','Legumes'),
('Green lentils','NO','Legumes'),
('Red lentils','NO','Legumes'),
('Kidney beans','NO','Legumes'),
('Black beans','NO','Legumes'),
('White beans','NO','Legumes'),

-- Oils, spices & condiments -> NO
('Olive oil','NO','Oils'),
('Sunflower oil','NO','Oils'),
('Canola oil','NO','Oils'),
('Coconut oil','NO','Oils'),
('Sesame oil','NO','Oils'),
('Vinegar','NO','Condiments'),
('Apple cider vinegar','NO','Condiments'),
('Balsamic vinegar','NO','Condiments'),
('Soy sauce','NO','Condiments'),
('Fish sauce','NO','Condiments'),
('Worcestershire sauce','NO','Condiments'),
('Ketchup','NO','Condiments'),
('Mayonnaise','NO','Condiments'),
('Mustard seeds','NO','Spices'),
('Honey','NO','Sweeteners'),
('Sugar','NO','Sweeteners'),
('Brown sugar','NO','Sweeteners'),
('Salt','NO','Condiments'),
('Sea salt','NO','Condiments'),
('Pepper','NO','Spices'),
('Black pepper','NO','Spices'),
('White pepper','NO','Spices'),
('Paprika','NO','Spices'),
('Cayenne pepper','NO','Spices'),
('Curry powder','NO','Spices'),
('Turmeric','NO','Spices'),
('Cumin','NO','Spices'),
('Coriander','NO','Spices'),
('Basil','NO','Herbs'),
('Oregano','NO','Herbs'),
('Rosemary','NO','Herbs'),
('Thyme','NO','Herbs'),
('Parsley','NO','Herbs'),
('Dill','NO','Herbs'),
('Mint','NO','Herbs'),
('Ginger','NO','Spices'),
('Cinnamon','NO','Spices'),
('Nutmeg','NO','Spices'),
('Cloves','NO','Spices'),
('Cardamom','NO','Spices'),

-- Bakery & pasta -> NO
('White bread','NO','Bakery'),
('Wholegrain bread','NO','Bakery'),
('Baguette','NO','Bakery'),
('Tortilla','NO','Bakery'),
('Noodles','NO','Pasta'),
('Spaghetti','NO','Pasta'),
('Macaroni','NO','Pasta'),
('Lasagna sheets','NO','Pasta'),
('Pizza dough','NO','Bakery'),
('Croissant','NO','Bakery');


INSERT INTO Jelo (nazivJela, cena, slika, vremePripreme, brojPorudzbina) VALUES
('Spaghetti Bolognese', 12, 'spaghetti_bolognese.png', 35, 0),
('Chicken Caesar Salad', 10, 'chicken_caesar_salad.png', 20, 0),
('Margherita Pizza', 9, 'margherita_pizza.png', 25, 0),
('Pepperoni Pizza', 11, 'pepperoni_pizza.png', 25, 0),
('Four Cheese Pizza', 13, 'four_cheese_pizza.png', 25, 0),
('Pasta Carbonara', 12, 'pasta_carbonara.png', 30, 0),
('Lasagna', 14, 'lasagna.png', 40, 0),
('Mushroom Risotto', 12, 'mushroom_risotto.png', 35, 0),
('Grilled Salmon', 16, 'grilled_salmon.png', 25, 0),
('Fish and Chips', 11, 'fish_and_chips.png', 30, 0),
('Shrimp Scampi', 15, 'shrimp_scampi.png', 25, 0),
('Seafood Paella', 18, 'seafood_paella.png', 45, 0),
('Beef Burger', 11, 'beef_burger.png', 20, 0),
('Cheeseburger', 12, 'cheeseburger.png', 20, 0),
('Veggie Burger', 10, 'veggie_burger.png', 20, 0),
('Hot Dog', 8, 'hot_dog.png', 15, 0),
('Club Sandwich', 9, 'club_sandwich.png', 15, 0),
('BLT Sandwich', 9, 'blt_sandwich.png', 15, 0),
('Grilled Cheese Sandwich', 7, 'grilled_cheese_sandwich.png', 10, 0),
('Chicken Wrap', 8, 'chicken_wrap.png', 15, 0),
('Falafel Wrap', 8, 'falafel_wrap.png', 15, 0),
('Beef Tacos', 10, 'beef_tacos.png', 20, 0),
('Chicken Tacos', 10, 'chicken_tacos.png', 20, 0),
('Fish Tacos', 11, 'fish_tacos.png', 20, 0),
('Vegetarian Tacos', 9, 'vegetarian_tacos.png', 20, 0),
('Chicken Curry', 13, 'chicken_curry.png', 35, 0),
('Lamb Curry', 15, 'lamb_curry.png', 40, 0),
('Vegetable Curry', 12, 'vegetable_curry.png', 30, 0),
('Butter Chicken', 14, 'butter_chicken.png', 35, 0),
('Chicken Kebab', 12, 'chicken_kebab.png', 25, 0),
('Beef Kebab', 13, 'beef_kebab.png', 25, 0),
('Shawarma', 11, 'shawarma.png', 20, 0),
('Gyro', 10, 'gyro.png', 20, 0),
('Sushi Roll Salmon', 14, 'sushi_roll_salmon.png', 30, 0),
('Sushi Roll Tuna', 15, 'sushi_roll_tuna.png', 30, 0),
('Sushi Roll Avocado', 12, 'sushi_roll_avocado.png', 25, 0),
('Tempura Shrimp', 13, 'tempura_shrimp.png', 25, 0),
('Pad Thai', 14, 'pad_thai.png', 30, 0),
('Spring Rolls', 8, 'spring_rolls.png', 15, 0),
('Sweet and Sour Pork', 13, 'sweet_and_sour_pork.png', 25, 0),
('Kung Pao Chicken', 14, 'kung_pao_chicken.png', 30, 0),
('Fried Rice', 10, 'fried_rice.png', 20, 0),
('Beef Noodles', 12, 'beef_noodles.png', 25, 0),
('Chicken Noodles', 11, 'chicken_noodles.png', 25, 0),
('Vegetable Stir Fry', 10, 'vegetable_stir_fry.png', 20, 0),
('Ramen', 13, 'ramen.png', 30, 0),
('Pho', 14, 'pho.png', 35, 0),
('Beef Steak', 18, 'beef_steak.png', 40, 0),
('Pork Chops', 15, 'pork_chops.png', 35, 0),
('Grilled Chicken Breast', 12, 'grilled_chicken_breast.png', 25, 0);


-- INSERT JeloSastojak for all dishes

INSERT INTO Jelo_Sastojak (idJelo, idSastojak) VALUES
-- 1. Spaghetti Bolognese
(1, 189), (1, 24), (1, 71), (1, 76), (1, 78), (1, 80), (1, 58), (1, 144), (1, 166), (1, 163), (1, 161),
-- 2. Chicken Caesar Salad
(2, 21), (2, 84), (2, 85), (2, 58), (2, 144), (2, 157),
-- 3. Margherita Pizza
(3, 192), (3, 57), (3, 71), (3, 144), (3, 166),
-- 4. Pepperoni Pizza
(4, 192), (4, 34), (4, 57), (4, 71), (4, 144), (4, 166),
-- 5. Four Cheese Pizza
(5, 192), (5, 56), (5, 57), (5, 58), (5, 59), (5, 71), (5, 144), (5, 166),
-- 6. Pasta Carbonara
(6, 189), (6, 22), (6, 4), (6, 57), (6, 144), (6, 163),
-- 7. Lasagna
(7, 191), (7, 24), (7, 57), (7, 71), (7, 144), (7, 166),
-- 8. Mushroom Risotto
(8, 97), (8, 128), (8, 71), (8, 144), (8, 163),
-- 9. Grilled Salmon
(9, 42), (9, 144), (9, 163), (9, 166),
-- 10. Fish and Chips
(10, 44), (10, 81), (10, 144), (10, 163),
-- 11. Shrimp Scampi
(11, 55), (11, 78), (11, 144), (11, 163),
-- 12. Seafood Paella
(12, 41), (12, 42), (12, 43), (12, 55), (12, 127), (12, 144), (12, 163),
-- 13. Beef Burger
(13, 23), (13, 184), (13, 71), (13, 144), (13, 163),
-- 14. Cheeseburger
(14, 23), (14, 56), (14, 184), (14, 71), (14, 144), (14, 163),
-- 15. Veggie Burger
(15, 71), (15, 84), (15, 88), (15, 184), (15, 144), (15, 163),
-- 16. Hot Dog
(16, 36), (16, 184), (16, 144), (16, 163),
-- 17. Club Sandwich
(17, 21), (17, 30), (17, 184), (17, 84), (17, 144), (17, 163),
-- 18. BLT Sandwich
(18, 31), (18, 76), (18, 184), (18, 84), (18, 144), (18, 163),
-- 19. Grilled Cheese Sandwich
(19, 57), (19, 184), (19, 144), (19, 163),
-- 20. Chicken Wrap
(20, 21), (20, 187), (20, 84), (20, 144), (20, 163),
-- 21. Falafel Wrap
(21, 137), (21, 187), (21, 84), (21, 144), (21, 163),
-- 22. Beef Tacos
(22, 23), (22, 184), (22, 84), (22, 144), (22, 163),
-- 23. Chicken Tacos
(23, 21), (23, 184), (23, 84), (23, 144), (23, 163),
-- 24. Fish Tacos
(24, 44), (24, 184), (24, 84), (24, 144), (24, 163),
-- 25. Vegetarian Tacos
(25, 71), (25, 84), (25, 184), (25, 144), (25, 163),
-- 26. Chicken Curry
(26, 21), (26, 168), (26, 169), (26, 144), (26, 163),
-- 27. Lamb Curry
(27, 27), (27, 168), (27, 169), (27, 144), (27, 163),
-- 28. Vegetable Curry
(28, 71), (28, 84), (28, 168), (28, 169), (28, 144), (28, 163),
-- 29. Butter Chicken
(29, 21), (29, 65), (29, 168), (29, 169), (29, 144), (29, 163),
-- 30. Chicken Kebab
(30, 21), (30, 144), (30, 163),
-- 31. Beef Kebab
(31, 23), (31, 144), (31, 163),
-- 32. Shawarma
(32, 23), (32, 184), (32, 144), (32, 163),
-- 33. Gyro
(33, 23), (33, 184), (33, 144), (33, 163),
-- 34. Sushi Roll Salmon
(34, 42), (34, 189), (34, 71), (34, 144),
-- 35. Sushi Roll Tuna
(35, 41), (35, 189), (35, 71), (35, 144),
-- 36. Sushi Roll Avocado
(36, 123), (36, 71), (36, 144),
-- 37. Tempura Shrimp
(37, 55), (37, 184), (37, 71), (37, 144),
-- 38. Pad Thai
(38, 189), (38, 21), (38, 71), (38, 144), (38, 163),
-- 39. Spring Rolls
(39, 187), (39, 71), (39, 84), (39, 144),
-- 40. Sweet and Sour Pork
(40, 25), (40, 71), (40, 155), (40, 144),
-- 41. Kung Pao Chicken
(41, 21), (41, 16), (41, 168), (41, 144), (41, 163),
-- 42. Fried Rice
(42, 127), (42, 71), (42, 21), (42, 144), (42, 163),
-- 43. Beef Noodles
(43, 23), (43, 188), (43, 71), (43, 144),
-- 44. Chicken Noodles
(44, 21), (44, 188), (44, 71), (44, 144),
-- 45. Vegetable Stir Fry
(45, 71), (45, 84), (45, 97), (45, 144),
-- 46. Ramen
(46, 188), (46, 41), (46, 71), (46, 144),
-- 47. Pho
(47, 23), (47, 71), (47, 84), (47, 144),
-- 48. Beef Steak
(48, 23), (48, 163), (48, 144),
-- 49. Pork Chops
(49, 25), (49, 163), (49, 144),
-- 50. Grilled Chicken Breast
(50, 21), (50, 163), (50, 144);


insert into meni (dnevniMeni, nazivMenija) values("NO","Easter");
insert into meni (dnevniMeni, nazivMenija) values("NO","Vegan");
insert into meni (dnevniMeni, nazivMenija) values("NO","Vegetarian");

insert into meni (dnevniMeni, nazivMenija) values("NO","Monday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Tuesday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Wednesday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Thursday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Friday");

insert into meni (dnevniMeni, nazivMenija) values("NO","Saturday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Sunday");

-- Easter (idMeni=1)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,1),(31,1),(43,1),(48,1),(22,1),
(18,1),(29,1),(14,1),(2,1),(26,1),
(30,1),(44,1),(23,1),(20,1),(17,1),
(21,1),(10,1),(24,1),(5,1),(42,1),
(19,1),(50,1),(9,1),(33,1),(16,1);

-- Vegan (idMeni=2)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(21,2),(8,2),(38,2),(39,2),(36,2),
(28,2),(45,2),(25,2),(15,2);

-- Vegetarian (idMeni=3)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(21,3),(8,3),(38,3),(39,3),(36,3),
(28,3),(45,3),(25,3),(15,3),
(5,3),(19,3),(3,3),(7,3),(6,3);

-- Monday (idMeni=4)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,4),(31,4),(43,4),(48,4),(22,4),
(18,4),(29,4),(14,4),(2,4),(26,4),
(30,4),(44,4),(23,4),(20,4),(17,4),
(10,4),(24,4),(5,4),(42,4),(19,4),
(50,4),(9,4),(33,4),(16,4),(41,4);

-- Tuesday (idMeni=5)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,5),(7,5),(3,5),(8,5),(38,5),
(6,5),(4,5),(47,5),(49,5),(46,5),
(12,5),(32,5),(11,5),(1,5),(39,5),
(36,5),(34,5),(35,5),(40,5),(37,5),
(28,5),(45,5),(25,5),(15,5);

-- Wednesday (idMeni=6)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,6),(31,6),(43,6),(48,6),(22,6),
(18,6),(29,6),(14,6),(2,6),(26,6),
(30,6),(44,6),(23,6),(20,6),(17,6),
(10,6),(24,6),(5,6),(42,6),(19,6),
(50,6),(9,6),(33,6),(16,6),(41,6);

-- Thursday (idMeni=7)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,7),(7,7),(3,7),(8,7),(38,7),
(6,7),(4,7),(47,7),(49,7),(46,7),
(12,7),(32,7),(11,7),(1,7),(39,7),
(36,7),(34,7),(35,7),(40,7),(37,7),
(28,7),(45,7),(25,7),(15,7);

-- Friday (idMeni=8)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,8),(31,8),(43,8),(48,8),(22,8),
(18,8),(29,8),(14,8),(2,8),(26,8),
(30,8),(44,8),(23,8),(20,8),(17,8),
(10,8),(24,8),(5,8),(42,8),(19,8),
(50,8),(9,8),(33,8),(16,8),(41,8);

-- Saturday (idMeni=9)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,9),(7,9),(3,9),(8,9),(38,9),
(6,9),(4,9),(47,9),(49,9),(46,9),
(12,9),(32,9),(11,9),(1,9),(39,9),
(36,9),(34,9),(35,9),(40,9),(37,9),
(28,9),(45,9),(25,9),(15,9);

-- Sunday (idMeni=10)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,10),(31,10),(43,10),(48,10),(22,10),
(18,10),(29,10),(14,10),(2,10),(26,10),
(30,10),(44,10),(23,10),(20,10),(17,10),
(10,10),(24,10),(5,10),(42,10),(19,10),
(50,10),(9,10),(33,10),(16,10),(41,10);
