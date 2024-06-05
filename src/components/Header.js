import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const Header = () => {
  return (
    <header className="bg-white shadow-md about-us-header">
      <div className="container mx-auto px-12 py-3 flex justify-between items-center">
        <span id="company-logo">EpiCred</span>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/tools">Tools</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
            <li>
              <Link href="/loans">Loans</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Button variant="contained" color="primary" id="apply-now-btn">
          Apply Now
        </Button>
      </div>
    </header>
  );
};

export default Header;
