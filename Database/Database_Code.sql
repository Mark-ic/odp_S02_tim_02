-- MySQL Script generated and fixed
-- Sat Aug 23 11:31:38 2025
-- Model: New Model    Version: 1.0

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Jelo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Jelo` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Jelo` (
  `idJelo` INT NOT NULL AUTO_INCREMENT,
  `nazivJela` VARCHAR(45) NOT NULL,
  `cena` INT NOT NULL,
  `slika` VARCHAR(100) NOT NULL,
  `vremePripreme` INT NOT NULL,
  `brojPorudzbina` INT NOT NULL,
  PRIMARY KEY (`idJelo`),
  UNIQUE INDEX `naziv_UNIQUE` (`nazivJela` ASC),
  CONSTRAINT `chk_cena_pozitivna` CHECK (`cena` > 0)
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Sastojak`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Sastojak` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Sastojak` (
  `idSastojak` INT NOT NULL AUTO_INCREMENT,
  `nazivSastojka` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSastojak`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jelo_Sastojak`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Jelo_Sastojak` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Jelo_Sastojak` (
  `idJelo` INT NOT NULL,
  `idSastojak` INT NOT NULL,
  PRIMARY KEY (`idJelo`, `idSastojak`),
  CONSTRAINT `fk_JeloSastojak_Jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `mydb`.`Jelo` (`idJelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JeloSastojak_Sastojak`
    FOREIGN KEY (`idSastojak`)
    REFERENCES `mydb`.`Sastojak` (`idSastojak`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Alergen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Alergen` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Alergen` (
  `idAlergen` INT NOT NULL AUTO_INCREMENT,
  `nazivAlergena` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAlergen`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jelo_Alergen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Jelo_Alergen` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Jelo_Alergen` (
  `idJelo` INT NOT NULL,
  `idAlergen` INT NOT NULL,
  PRIMARY KEY (`idJelo`, `idAlergen`),
  CONSTRAINT `fk_JeloAlergen_Jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `mydb`.`Jelo` (`idJelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JeloAlergen_Alergen`
    FOREIGN KEY (`idAlergen`)
    REFERENCES `mydb`.`Alergen` (`idAlergen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Meni`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Meni` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Meni` (
  `idMeni` INT NOT NULL AUTO_INCREMENT,
  `dnevniMeni` TINYINT NOT NULL,
  PRIMARY KEY (`idMeni`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Jelo_Meni`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Jelo_Meni` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Jelo_Meni` (
  `idJelo` INT NOT NULL,
  `idMeni` INT NOT NULL,
  PRIMARY KEY (`idMeni`, `idJelo`),
  CONSTRAINT `fk_JeloMeni_Jelo`
    FOREIGN KEY (`idJelo`)
    REFERENCES `mydb`.`Jelo` (`idJelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_JeloMeni_Meni`
    FOREIGN KEY (`idMeni`)
    REFERENCES `mydb`.`Meni` (`idMeni`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Korisnik`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Korisnik` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Korisnik` (
  `idKorisnik` INT NOT NULL AUTO_INCREMENT,
  `ime` VARCHAR(45) NOT NULL,
  `prezime` VARCHAR(60) NOT NULL,
  `telefon` VARCHAR(45) NOT NULL,
  `uloga` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idKorisnik`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Porudzbina`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Porudzbina` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Porudzbina` (
  `idPorudzbina` INT NOT NULL AUTO_INCREMENT,
  `preostaloVreme` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `nacinIsporuke` VARCHAR(45) NOT NULL,  -- ispravljen tipfeler
  `adresa` VARCHAR(85) NULL,
  `idJelo` INT NOT NULL,
  `idMeni` INT NOT NULL,
  `idKorisnik` INT NOT NULL,
  PRIMARY KEY (`idPorudzbina`),
  CONSTRAINT `fk_Porudzbina_JeloMeni`
    FOREIGN KEY (`idMeni`, `idJelo`)
    REFERENCES `mydb`.`Jelo_Meni` (`idMeni`, `idJelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Porudzbina_Korisnik`
    FOREIGN KEY (`idKorisnik`)
    REFERENCES `mydb`.`Korisnik` (`idKorisnik`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
