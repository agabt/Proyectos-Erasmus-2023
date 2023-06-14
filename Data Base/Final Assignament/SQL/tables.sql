CREATE TABLE `birthday` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fname` VARCHAR(255),
  `lname` VARCHAR(255),
  `bday` DATE,
  PRIMARY KEY(`id`)
) ENGINE = InnoDB;
