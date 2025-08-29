-- MySQL Script corrected
-- Schema FoodieExpress

DROP SCHEMA IF EXISTS `FoodieExpress` ;
CREATE SCHEMA IF NOT EXISTS `FoodieExpress` DEFAULT CHARACTER SET utf8 ;
USE `FoodieExpress` ;

-- -----------------------------------------------------
-- Table Jelo
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Jelo` ;

CREATE TABLE `Jelo` (
  `idJelo` INT NOT NULL AUTO_INCREMENT,
  `nazivJela` VARCHAR(45) NOT NULL,
  `cena` INT NOT NULL,
  `slika` VARCHAR(100) NOT NULL,
  `vremePripreme` INT NOT NULL,
  `brojPorudzbina` INT NOT NULL,
  PRIMARY KEY (`idJelo`),
  UNIQUE INDEX `naziv_UNIQUE` (`nazivJela` ASC)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Sastojak
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Sastojak` ;

CREATE TABLE `Sastojak` (
  `idSastojak` INT NOT NULL AUTO_INCREMENT,
  `nazivSastojka` VARCHAR(45) NOT NULL,
  `kategorija` VARCHAR(45) NOT NULL,
  `alergen` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`idSastojak`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Jelo_Sastojak
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Jelo_Sastojak` ;

CREATE TABLE `Jelo_Sastojak` (
  `idJelo` INT NOT NULL,
  `idSastojak` INT NOT NULL,
  PRIMARY KEY (`idJelo`, `idSastojak`),
  CONSTRAINT `fk_jelo_sastojak_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_jelo_sastojak_sastojak`
    FOREIGN KEY (`idSastojak`)
    REFERENCES `Sastojak` (`idSastojak`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Meni
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Meni` ;

CREATE TABLE `Meni` (
  `idMeni` INT NOT NULL AUTO_INCREMENT,
  `dnevniMeni` varchar(5) NOT NULL,
  `nazivMenija` VARCHAR(45) NULL,
  PRIMARY KEY (`idMeni`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Jelo_Meni
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Jelo_Meni` ;

CREATE TABLE `Jelo_Meni` (
  `idJelo` INT NOT NULL,
  `idMeni` INT NOT NULL,
  PRIMARY KEY (`idMeni`, `idJelo`),
  CONSTRAINT `fk_jelomeni_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_jelomeni_meni`
    FOREIGN KEY (`idMeni`)
    REFERENCES `Meni` (`idMeni`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Korisnik
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Korisnik` ;

CREATE TABLE `Korisnik` (
  `idKorisnik` INT NOT NULL AUTO_INCREMENT,
  `KorisnickoIme` VARCHAR(45) NOT NULL,
  `telefon` VARCHAR(45) NOT NULL,
  `uloga` VARCHAR(45) NOT NULL,
  `sifra` varchar(500) NOT NULL,
  PRIMARY KEY (`idKorisnik`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table Porudzbina
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Porudzbina` ;

CREATE TABLE `Porudzbina` (
  `idPorudzbina` INT NOT NULL AUTO_INCREMENT,
  `preostaloVreme` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `nacinIsporuke` VARCHAR(45) NOT NULL,
  `adresa` VARCHAR(85) NULL,
  `idJelo` INT NULL,
  `idKorisnik` INT NOT NULL,
  PRIMARY KEY (`idPorudzbina`),
  CONSTRAINT `fk_porudzbina_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `fk_porudzbina_korisnik`
    FOREIGN KEY (`idKorisnik`)
    REFERENCES `Korisnik` (`idKorisnik`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB;


DROP TRIGGER IF EXISTS povecaj_broj_porudzbina;

DELIMITER $$

CREATE TRIGGER povecaj_broj_porudzbina
AFTER INSERT ON Porudzbina
FOR EACH ROW
BEGIN
    UPDATE Jelo
    SET brojPorudzbina = brojPorudzbina + 1
    WHERE idJelo = NEW.idJelo;
END$$

DELIMITER ;

DROP TRIGGER IF EXISTS smanji_broj_porudzbina;

DELIMITER $$

CREATE TRIGGER smanji_broj_porudzbina
AFTER DELETE ON Porudzbina
FOR EACH ROW
BEGIN
    UPDATE Jelo
    SET brojPorudzbina = GREATEST(brojPorudzbina - 1, 0)
    WHERE idJelo = OLD.idJelo;
END$$

DELIMITER ;



