--Place your queries below
--Feature Set 1
SELECT * FROM `students` WHERE username = 'psychemikey'
UPDATE `students` SET name='Mobius' WHERE id='0'
INSERT INTO `students` VALUES ('1000', 'insert', 'insert@email.com', '23', '342123', 'inserttim', 'pass', 'today', 'active')
DELETE FROM `students` WHERE id=1000

--Feature Set 2
INSERT INTO `todo_items` (`id`, `title`, `details`, `timestamp`) VALUES
(1, 'Eat Breakfast', 'Noodles and eggs', '0000-00-00 00:00:00'),
(2, 'Eat Lunch', 'Eat food', '0000-00-00 00:00:00'),
(3, 'Wear Jacket', 'Put on a jacket', '0000-00-00 00:00:00'),
(4, 'Put on Pants', 'Wear my pants', '0000-00-00 00:00:00'),
(5, 'Put on Pants', 'Wear my pants', '2017-02-22 18:01:35'),
(6, 'Eat Dinner', 'Have some chicken in the fridge', '2017-02-22 19:36:32'),
(7, 'Make A Million Dollars', 'Money in the Bank', '2017-02-22 19:38:06'),
(8, 'Fetch a Bone', 'Arf arf', '2017-02-22 19:38:06'),
(9, 'Punch a Punching Bag', 'Rocky Balboa', '2017-02-22 19:38:06'),
(10, 'Destroy it', 'Break the Mold', '2017-02-22 19:38:42');

SELECT * FROM `todo_items` WHERE `user_id`=1;
INSERT INTO `todo_items`(`title`, `details`, `user_id`) VALUES ('Dress Up', 'Wear nice clothes', '5');
DELETE FROM `todo_items` WHERE `user_id`=1 AND `id`=8;
UPDATE `todo_items` SET `user_id`=3 WHERE `user_id`=1 and `id`=4;
SELECT * FROM `students` WHERE `id`=2;
