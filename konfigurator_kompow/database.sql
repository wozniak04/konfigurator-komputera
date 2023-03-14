-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Mar 2023, 10:55
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `database`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `podzespoly`
--

CREATE TABLE `podzespoly` (
  `id` int(255) NOT NULL,
  `nazwa` varchar(50) NOT NULL,
  `rodzaj` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `podzespoly`
--

INSERT INTO `podzespoly` (`id`, `nazwa`, `rodzaj`) VALUES
(1, 'RTX 2060', 'Karta graficzna'),
(2, 'GTX 1660 Super', 'Karta graficzna'),
(3, 'Intel Core i5-12400F', 'Procesor'),
(4, 'AMD Ryzen 5 7600X', 'Procesor'),
(5, 'Gigabyte X670 GAMING X AX', 'Płyta główna'),
(6, 'Gigabyte Z690 GAMING X DDR4', 'Płyta główna'),
(7, 'RTX 3090', 'Karta graficzna'),
(8, 'AMD Ryzen 9 7950X3D', 'Procesor'),
(9, 'Intel Core i7-13700K', 'Procesor'),
(10, 'AMD Ryzen 9 7950X', 'Procesor'),
(11, 'RTX 2090', 'Karta graficzna'),
(12, 'RTX 3060', 'Karta graficzna'),
(13, 'RX 6600', 'Karta graficzna'),
(14, 'RTX 4070 Ti', 'Karta graficzna'),
(15, '256 GB', 'Pamięć SSD'),
(16, '512 GB', 'Pamięć SSD'),
(17, '1 TB', 'Pamięć SSD'),
(18, '2 TB', 'Pamięć HDD'),
(19, 'Kingston FURY 16GB (2x8GB) 3600MHz', 'Pamięć RAM'),
(20, 'Corsair 32GB (2x16GB) 3200MHz', 'Pamięć RAM'),
(21, 'SilentiumPC Vero L3 500W', 'Zasilacz'),
(22, 'Thermaltake Toughpower GF 650W', 'Zasilacz'),
(23, 'ENDORFY Supremo FM5 750W', 'Zasilacz'),
(24, 'GOODRAM 16GB (2x8GB) 3600MHz', 'Pamięć RAM'),
(25, 'Gigabyte Z690 GAMING X DDR4', 'Płyta główna'),
(26, 'ASUS ROG STRIX B550-F GAMING', 'Płyta główna'),
(27, 'ASUS TUF GAMING B760-PLUS WIFI DDR4', 'Płyta główna'),
(28, 'RTX 3060 Ti', 'Karta graficzna'),
(30, 'RTX 3050', 'Karta graficzna'),
(31, 'GTX 1650', 'Karta graficzna'),
(32, 'RTX 4090', 'Karta graficzna'),
(34, 'Corsair RM850e 850W', 'Zasilacz'),
(35, 'Gigabyte UD1000GM PG5 PCIe 5.0 1000W', 'Zasilacz'),
(36, 'Kingston FURY 16GB (2x8GB) 3200MHz', 'Pamięć RAM'),
(37, 'ENDORFY Regnum 400 ARGB', 'Obudowa'),
(38, 'be quiet! Pure Base 500 Black', 'Obudowa'),
(39, 'ASUS TUF GAMING GT301', 'Obudowa'),
(40, 'KRUX Leda', 'Obudowa'),
(41, 'Genesis Irid 400 RGB', 'Obudowa'),
(42, 'Kolink Observatory Lite RGB Black', 'Obudowa'),
(43, 'be quiet! Silent Base 802 Czarna', 'Obudowa'),
(44, 'G.SKILL 16 GB (2x8GB) 3200MHz', 'Pamięć RAM');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `sesje`
--

CREATE TABLE `sesje` (
  `id` int(255) NOT NULL,
  `username` varchar(50) NOT NULL,
  `uid` varchar(100) NOT NULL,
  `expiration` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `sesje`
--

INSERT INTO `sesje` (`id`, `username`, `uid`, `expiration`) VALUES
(1, 'admin@admin.pl', 'd08d1ce4-fca1-4243-8544-4176b5dcc786', '2023-03-14 10:58:18'),
(2, 'Asdasdadsa@wp.pl', 'ab9192d5-605c-4b7b-afec-e5d095c4b470', '2023-03-14 11:04:44');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(200) NOT NULL,
  `password` varchar(36) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `password`, `email`) VALUES
(1, 'admin', 'admin@admin.pl'),
(2, 'email', 'email@email.pl'),
(3, '$2b$10$VMjgU6oZw1zu3vANxIw1wObDg7pmr', 'Asdasdadsa@wp.pl');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `podzespoly`
--
ALTER TABLE `podzespoly`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `sesje`
--
ALTER TABLE `sesje`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `podzespoly`
--
ALTER TABLE `podzespoly`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT dla tabeli `sesje`
--
ALTER TABLE `sesje`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
