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

insert into meni (dnevniMeni, nazivMenija) values("NO","Monday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Tuesday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Wednesday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Thursday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Friday");

insert into meni (dnevniMeni, nazivMenija) values("NO","Saturday");
insert into meni (dnevniMeni, nazivMenija) values("NO","Sunday");


-- Monday (idMeni=1)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,1),(31,1),(43,1),(48,1),(22,1),
(18,1),(29,1),(14,1),(2,1),(26,1),
(50,1),(9,1),(33,1),(16,1),(41,1);

-- Tuesday (idMeni=2)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,2),(7,2),(3,2),(8,2),(38,2),
(6,2),(4,2),(47,2),(49,2),(46,2),
(28,2),(45,2),(25,2),(15,2);

-- Wednesday (idMeni=3)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,3),(31,3),(43,3),(48,3),(22,3),
(18,3),(29,3),(14,3),(2,3),(26,3),
(50,3),(9,3),(33,3),(16,3),(41,3);

-- Thursday (idMeni=4)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,4),(7,4),(3,4),(8,4),(38,4),
(36,4),(34,4),(35,4),(40,4),(37,4),
(28,4),(45,4),(25,4),(15,4);

-- Friday (idMeni=5)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,5),(31,5),(43,5),(48,5),(22,5),
(10,5),(24,5),(5,5),(42,5),(19,5),
(50,5),(9,5),(33,5),(16,5),(41,5);

-- Saturday (idMeni=6)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(27,6),(7,6),(3,6),(8,6),(38,6),
(6,6),(4,6),(47,6),(49,6),(46,6),
(28,6),(45,6),(25,6),(15,6);

-- Sunday (idMeni=7)
INSERT INTO Jelo_Meni (idJelo, idMeni) VALUES
(13,7),(31,7),(43,7),(48,7),(22,7),
(10,7),(24,7),(5,7),(42,7),(19,7),
(50,7),(9,7),(33,7),(16,7),(41,7);

-- Sifra user123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('user1','+3816158051','user','$2b$10$tfRUPk.92XBW.Tg4Wdcf.eII3VHLYC7bDxGOQaROcb5ztNXxDOlsy');

-- Sifra user123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('user2','+3816158051','user','$2b$10$xaYdxRnIe9xWlCOOzEXsHuxmuWOV94nwOFVBxDdRxcTZGLWSJwUey');

-- Sifra user123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('user3','+3816155533','user','$2b$10$83ngt4ewnB57G63Di5kVruuzZFELW.96wEjtuz5It5ynKBm1osp4e');

-- Sifra user123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('user4','+381611234567','user','$2b$10$PchjqXzaILs24bPdLchizOa3EUfkd0wnUvZe2EtPLflXzFIqrnWx.');

-- Sifra user123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('user5','+381621334567','user','$2b$10$YZN9CH4gR684toMiVZ.8VuXvlKbf2/dIOCjgqryKbvLUKAwOVxI3K');

-- Sifra admin123
INSERT INTO korisnik(KorisnickoIme,telefon,uloga,sifra) VALUES ('admin','+38161256604','admin','$2b$10$LnHGFEXIlJUQB1OyJsH9NOa6FmSqJIYOUWlfZCxKwKnkxI409OaY6');

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (20, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 9, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (31, 'READY_FOR_PICKUP', 'PICKUP', '', 45, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (11, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 45, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'DONE', 'PICKUP', '', 41, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (20, 'PREPARING', 'DELIVERY', 'Zmaj Jovina 3', 14, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'READY_FOR_PICKUP', 'PICKUP', '', 11, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 4, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'DONE', 'PICKUP', '', 2, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (12, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 14, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'READY_FOR_PICKUP', 'PICKUP', '', 16, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (12, 'IN_DELIVERY', 'DELIVERY', 'Nikole Tesle 9A', 18, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'DONE', 'PICKUP', '', 40, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (35, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 7, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'READY_FOR_PICKUP', 'PICKUP', '', 4, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'IN_DELIVERY', 'DELIVERY', 'Cara Dusana 45', 35, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (38, 'DONE', 'PICKUP', '', 23, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (48, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 22, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'READY_FOR_PICKUP', 'PICKUP', '', 6, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'IN_DELIVERY', 'DELIVERY', 'Nikole Tesle 9A', 42, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (54, 'DONE', 'PICKUP', '', 18, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (44, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 45, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (45, 'READY_FOR_PICKUP', 'PICKUP', '', 23, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 45, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (38, 'DONE', 'PICKUP', '', 40, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (16, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 46, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'READY_FOR_PICKUP', 'PICKUP', '', 50, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 31, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (17, 'DONE', 'PICKUP', '', 44, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (49, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 11, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (53, 'READY_FOR_PICKUP', 'PICKUP', '', 35, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (20, 'DONE', 'PICKUP', '', 40, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (31, 'PREPARING', 'DELIVERY', 'Jovana Cvijica 88', 25, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (45, 'READY_FOR_PICKUP', 'PICKUP', '', 8, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 39, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'DONE', 'PICKUP', '', 42, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (32, 'PREPARING', 'DELIVERY', 'Zmaj Jovina 3', 34, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'READY_FOR_PICKUP', 'PICKUP', '', 2, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 33, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'DONE', 'PICKUP', '', 4, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 8, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (57, 'READY_FOR_PICKUP', 'PICKUP', '', 35, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (26, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 11, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'DONE', 'PICKUP', '', 33, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (57, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 16, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'READY_FOR_PICKUP', 'PICKUP', '', 16, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 28, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'DONE', 'PICKUP', '', 17, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 6, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (48, 'READY_FOR_PICKUP', 'PICKUP', '', 2, 1);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 32, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (35, 'READY_FOR_PICKUP', 'PICKUP', '', 48, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 12, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'DONE', 'PICKUP', '', 45, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (34, 'PREPARING', 'DELIVERY', 'Kralja Petra 21', 32, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'READY_FOR_PICKUP', 'PICKUP', '', 39, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 15, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'DONE', 'PICKUP', '', 45, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (48, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 45, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (31, 'READY_FOR_PICKUP', 'PICKUP', '', 15, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (14, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 45, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'DONE', 'PICKUP', '', 7, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'PREPARING', 'DELIVERY', 'Jovana Cvijica 88', 45, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (56, 'READY_FOR_PICKUP', 'PICKUP', '', 12, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (41, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 14, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'DONE', 'PICKUP', '', 11, 2);


INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (12, 'READY_FOR_PICKUP', 'PICKUP', '', 23, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 40, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (45, 'DONE', 'PICKUP', '', 23, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 32, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'READY_FOR_PICKUP', 'PICKUP', '', 27, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (18, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 6, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (37, 'DONE', 'PICKUP', '', 24, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 44, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (35, 'READY_FOR_PICKUP', 'PICKUP', '', 27, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (18, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 39, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'DONE', 'PICKUP', '', 21, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 2, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'READY_FOR_PICKUP', 'PICKUP', '', 34, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 39, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'DONE', 'PICKUP', '', 15, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (46, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 48, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'READY_FOR_PICKUP', 'PICKUP', '', 37, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (12, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 22, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 38, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'READY_FOR_PICKUP', 'PICKUP', '', 3, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (31, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 44, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'DONE', 'PICKUP', '', 16, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (44, 'PREPARING', 'DELIVERY', 'Dositejeva 5', 29, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (32, 'READY_FOR_PICKUP', 'PICKUP', '', 10, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'IN_DELIVERY', 'DELIVERY', 'Kralja Petra 21', 4, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'DONE', 'PICKUP', '', 27, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 43, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (10, 'READY_FOR_PICKUP', 'PICKUP', '', 17, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (53, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 50, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (25, 'DONE', 'PICKUP', '', 6, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 48, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (45, 'READY_FOR_PICKUP', 'PICKUP', '', 3, 2);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (57, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 8, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (10, 'READY_FOR_PICKUP', 'PICKUP', '', 7, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 15, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'DONE', 'PICKUP', '', 42, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (38, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 46, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (49, 'READY_FOR_PICKUP', 'PICKUP', '', 22, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 15, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (16, 'DONE', 'PICKUP', '', 48, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (51, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 17, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (14, 'READY_FOR_PICKUP', 'PICKUP', '', 28, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (51, 'IN_DELIVERY', 'DELIVERY', 'Kralja Petra 21', 14, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (41, 'DONE', 'PICKUP', '', 9, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (11, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 10, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'READY_FOR_PICKUP', 'PICKUP', '', 39, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 19, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (44, 'DONE', 'PICKUP', '', 29, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (47, 'PREPARING', 'DELIVERY', 'Zmaj Jovina 3', 45, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (35, 'READY_FOR_PICKUP', 'PICKUP', '', 13, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (10, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 26, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'DONE', 'PICKUP', '', 9, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'PREPARING', 'DELIVERY', 'Jovana Cvijica 88', 20, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (20, 'READY_FOR_PICKUP', 'PICKUP', '', 16, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (30, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 17, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (36, 'DONE', 'PICKUP', '', 19, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (55, 'PREPARING', 'DELIVERY', 'Nikole Tesle 9A', 21, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'READY_FOR_PICKUP', 'PICKUP', '', 24, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (47, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 1, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (35, 'DONE', 'PICKUP', '', 35, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (25, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 4, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'READY_FOR_PICKUP', 'PICKUP', '', 45, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 17, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (56, 'DONE', 'PICKUP', '', 25, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 12, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (26, 'READY_FOR_PICKUP', 'PICKUP', '', 3, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 24, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (58, 'DONE', 'PICKUP', '', 5, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 9, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (37, 'READY_FOR_PICKUP', 'PICKUP', '', 27, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 27, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (40, 'DONE', 'PICKUP', '', 14, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 16, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (40, 'READY_FOR_PICKUP', 'PICKUP', '', 13, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 27, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'DONE', 'PICKUP', '', 31, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'READY_FOR_PICKUP', 'PICKUP', '', 9, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 5, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (45, 'DONE', 'PICKUP', '', 18, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 36, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'READY_FOR_PICKUP', 'PICKUP', '', 32, 3);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (55, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 49, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (36, 'READY_FOR_PICKUP', 'PICKUP', '', 48, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'IN_DELIVERY', 'DELIVERY', 'Nikole Tesle 9A', 23, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'DONE', 'PICKUP', '', 50, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (34, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 10, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (54, 'READY_FOR_PICKUP', 'PICKUP', '', 27, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (32, 'IN_DELIVERY', 'DELIVERY', 'Kralja Petra 21', 24, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (25, 'DONE', 'PICKUP', '', 28, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'PREPARING', 'DELIVERY', 'Nikole Tesle 9A', 4, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (49, 'READY_FOR_PICKUP', 'PICKUP', '', 49, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (38, 'IN_DELIVERY', 'DELIVERY', 'Cara Dusana 45', 26, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'DONE', 'PICKUP', '', 46, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 36, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'READY_FOR_PICKUP', 'PICKUP', '', 41, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 34, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'DONE', 'PICKUP', '', 25, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 1, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (16, 'READY_FOR_PICKUP', 'PICKUP', '', 21, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'IN_DELIVERY', 'DELIVERY', 'Nikole Tesle 9A', 37, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'DONE', 'PICKUP', '', 31, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (30, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 35, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'READY_FOR_PICKUP', 'PICKUP', '', 16, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 13, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (34, 'DONE', 'PICKUP', '', 46, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (29, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 43, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'READY_FOR_PICKUP', 'PICKUP', '', 2, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (53, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 17, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (40, 'DONE', 'PICKUP', '', 36, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (56, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 26, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'READY_FOR_PICKUP', 'PICKUP', '', 1, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 7, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'DONE', 'PICKUP', '', 50, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'PREPARING', 'DELIVERY', 'Jovana Cvijica 88', 6, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'READY_FOR_PICKUP', 'PICKUP', '', 39, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'IN_DELIVERY', 'DELIVERY', 'Zmaj Jovina 3', 6, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'DONE', 'PICKUP', '', 4, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 13, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'READY_FOR_PICKUP', 'PICKUP', '', 36, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (55, 'IN_DELIVERY', 'DELIVERY', 'Cara Dusana 45', 10, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'DONE', 'PICKUP', '', 46, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'PREPARING', 'DELIVERY', 'Zmaj Jovina 3', 20, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (11, 'READY_FOR_PICKUP', 'PICKUP', '', 32, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 36, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'DONE', 'PICKUP', '', 48, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 42, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (16, 'READY_FOR_PICKUP', 'PICKUP', '', 40, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (36, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 8, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'DONE', 'PICKUP', '', 1, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (25, 'PREPARING', 'DELIVERY', 'Bulevar 12/3', 42, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'READY_FOR_PICKUP', 'PICKUP', '', 39, 4);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (12, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 15, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (32, 'READY_FOR_PICKUP', 'PICKUP', '', 13, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (10, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 47, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (11, 'DONE', 'PICKUP', '', 28, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'PREPARING', 'DELIVERY', 'Jovana Cvijica 88', 3, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (25, 'READY_FOR_PICKUP', 'PICKUP', '', 47, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'IN_DELIVERY', 'DELIVERY', 'Jovana Cvijica 88', 13, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (15, 'DONE', 'PICKUP', '', 26, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (17, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 45, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (16, 'READY_FOR_PICKUP', 'PICKUP', '', 5, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (41, 'IN_DELIVERY', 'DELIVERY', 'Cara Dusana 45', 49, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (17, 'DONE', 'PICKUP', '', 3, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (26, 'PREPARING', 'DELIVERY', 'Dositejeva 5', 37, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (30, 'READY_FOR_PICKUP', 'PICKUP', '', 18, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'IN_DELIVERY', 'DELIVERY', 'Nikole Tesle 9A', 4, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (31, 'DONE', 'PICKUP', '', 21, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'PREPARING', 'DELIVERY', 'Nikole Tesle 9A', 21, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'READY_FOR_PICKUP', 'PICKUP', '', 30, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'IN_DELIVERY', 'DELIVERY', 'Dositejeva 5', 23, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (18, 'DONE', 'PICKUP', '', 11, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (50, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 41, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (28, 'READY_FOR_PICKUP', 'PICKUP', '', 50, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (43, 'IN_DELIVERY', 'DELIVERY', 'Nemanjina 11', 21, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (19, 'DONE', 'PICKUP', '', 47, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (13, 'PREPARING', 'DELIVERY', 'Kralja Petra 21', 39, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (40, 'READY_FOR_PICKUP', 'PICKUP', '', 33, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (41, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 36, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (57, 'DONE', 'PICKUP', '', 28, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (24, 'PREPARING', 'DELIVERY', 'Cara Dusana 45', 3, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (59, 'READY_FOR_PICKUP', 'PICKUP', '', 13, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 35, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (33, 'DONE', 'PICKUP', '', 38, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (36, 'PREPARING', 'DELIVERY', 'Dositejeva 5', 13, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'READY_FOR_PICKUP', 'PICKUP', '', 29, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (21, 'IN_DELIVERY', 'DELIVERY', 'Gunduliceva 14', 39, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (47, 'DONE', 'PICKUP', '', 33, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (56, 'PREPARING', 'DELIVERY', 'Brace Radic 7', 44, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (60, 'READY_FOR_PICKUP', 'PICKUP', '', 3, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'IN_DELIVERY', 'DELIVERY', 'Kralja Petra 21', 33, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (23, 'DONE', 'PICKUP', '', 47, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (52, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 48, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (48, 'READY_FOR_PICKUP', 'PICKUP', '', 27, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (57, 'IN_DELIVERY', 'DELIVERY', 'Bulevar 12/3', 15, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (14, 'DONE', 'PICKUP', '', 35, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (42, 'PREPARING', 'DELIVERY', 'Nemanjina 11', 17, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (55, 'READY_FOR_PICKUP', 'PICKUP', '', 32, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (22, 'IN_DELIVERY', 'DELIVERY', 'Brace Radic 7', 26, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (39, 'DONE', 'PICKUP', '', 26, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (27, 'PREPARING', 'DELIVERY', 'Gunduliceva 14', 2, 5);

INSERT INTO porudzbina (preostaloVreme, status, nacinIsporuke, adresa, idJelo, idKorisnik)
VALUES (20, 'READY_FOR_PICKUP', 'PICKUP', '', 22, 5);
