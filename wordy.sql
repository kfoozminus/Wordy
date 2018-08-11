-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 11, 2018 at 09:36 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wordy`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `email`, `password`) VALUES
(1, 'koozs@gmail.com', 'sfdfs'),
(2, 'kozs@gmail.com', 'sfdfs'),
(3, 'jenny', 'abc'),
(4, 'sdsf', 'fdsdf'),
(5, 'asfsf', 'safsfd'),
(6, 'asfsfd', 'safasf'),
(7, 'asfsfds', 'sdfsf'),
(8, 'koozhsfjhs@gmail.com', 'sakhkjsdf'),
(9, 'kfoozminus@gmail.com', 'abcd'),
(11, 'rafcy', 'rafcy');

-- --------------------------------------------------------

--
-- Table structure for table `words`
--

CREATE TABLE `words` (
  `wordid` int(100) NOT NULL,
  `userid` int(100) NOT NULL,
  `word` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `words`
--

INSERT INTO `words` (`wordid`, `userid`, `word`) VALUES
(1, 1, 'hell'),
(2, 1, 'hello'),
(3, 2, 'hell'),
(4, 6, 'meh'),
(5, 6, 'aggregate'),
(6, 3, 'aggregate'),
(7, 3, 'produce'),
(8, 3, 'hell'),
(9, 3, 'table'),
(10, 3, 'neutral'),
(11, 3, 'explanation'),
(12, 3, 'attractive'),
(13, 3, 'perceive'),
(14, 3, 'hear'),
(15, 3, 'grow'),
(16, 3, 'reaction'),
(17, 3, 'adoptive'),
(18, 3, 'children'),
(19, 3, 'spent'),
(20, 3, 'appeal');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- Indexes for table `words`
--
ALTER TABLE `words`
  ADD PRIMARY KEY (`wordid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `words`
--
ALTER TABLE `words`
  MODIFY `wordid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
