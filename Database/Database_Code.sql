-- Schema
DROP SCHEMA IF EXISTS `FoodieExpress`;
CREATE SCHEMA IF NOT EXISTS `FoodieExpress` DEFAULT CHARACTER SET utf8;
USE `FoodieExpress`;

-- Jelo
CREATE TABLE IF NOT EXISTS `Jelo` (
  `idJelo` INT NOT NULL AUTO_INCREMENT,
  `nazivJela` VARCHAR(45) NOT NULL,
  `cena` INT NOT NULL CHECK (`cena` > 0),
  `slika` VARCHAR(100) NOT NULL,
  `vremePripreme` INT NOT NULL,
  `brojPorudzbina` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`idJelo`),
  UNIQUE INDEX `naziv_UNIQUE` (`nazivJela` ASC)
) ENGINE=InnoDB;

-- Sastojak
CREATE TABLE IF NOT EXISTS `Sastojak` (
  `idSastojak` INT NOT NULL AUTO_INCREMENT,
  `nazivSastojka` VARCHAR(45) NOT NULL,
  `alergen` VARCHAR(3) NULL,
  PRIMARY KEY (`idSastojak`)
) ENGINE=InnoDB;

-- Jelo_Sastojak
CREATE TABLE IF NOT EXISTS `Jelo_Sastojak` (
  `idJelo` INT NOT NULL,
  `idSastojak` INT NOT NULL,
  PRIMARY KEY (`idJelo`, `idSastojak`),
  CONSTRAINT `fk_js_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_js_sastojak`
    FOREIGN KEY (`idSastojak`)
    REFERENCES `Sastojak` (`idSastojak`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Meni
CREATE TABLE IF NOT EXISTS `Meni` (
  `idMeni` INT NOT NULL AUTO_INCREMENT,
  `dnevniMeni` TINYINT NOT NULL,
  PRIMARY KEY (`idMeni`)
) ENGINE=InnoDB;

-- Jelo_Meni
CREATE TABLE IF NOT EXISTS `Jelo_Meni` (
  `idJelo` INT NOT NULL,
  `idMeni` INT NOT NULL,
  PRIMARY KEY (`idMeni`, `idJelo`),
  CONSTRAINT `fk_jm_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_jm_meni`
    FOREIGN KEY (`idMeni`)
    REFERENCES `Meni` (`idMeni`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB;

-- Korisnik
CREATE TABLE IF NOT EXISTS `Korisnik` (
  `idKorisnik` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `prezime` VARCHAR(60) NOT NULL,
  `telefon` VARCHAR(45) NOT NULL,
  `uloga` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idKorisnik`)
) ENGINE=InnoDB;

-- Porudzbina
CREATE TABLE IF NOT EXISTS `Porudzbina` (
  `idPorudzbina` INT NOT NULL AUTO_INCREMENT,
  `preostaloVreme` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `nacinIsporuke` VARCHAR(45) NOT NULL,
  `adresa` VARCHAR(85) NULL,
  `idJelo` INT NOT NULL,
  `idMeni` INT NOT NULL,
  `idKorisnik` INT NOT NULL,
  PRIMARY KEY (`idPorudzbina`),
  INDEX `idJelo_idx` (`idJelo` ASC),
  INDEX `idMeni_idx` (`idMeni` ASC),
  INDEX `idKorisnik_idx` (`idKorisnik` ASC),
  CONSTRAINT `fk_p_jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `Jelo` (`idJelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_p_meni`
    FOREIGN KEY (`idMeni`)
    REFERENCES `Meni` (`idMeni`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_p_korisnik`
    FOREIGN KEY (`idKorisnik`)
    REFERENCES `Korisnik` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB;
