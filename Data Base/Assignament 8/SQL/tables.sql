CREATE TABLE `wishlist` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `description` VARCHAR(255),
  `wheresells` VARCHAR(255),
  `linkweb` VARCHAR(255),
  `price` INT(4),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;