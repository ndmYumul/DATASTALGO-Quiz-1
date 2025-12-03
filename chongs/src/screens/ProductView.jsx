import React, { useState } from 'react'
import products from '../products'

import { Row, Col, Form, Button } from 'react-bootstrap';
import Product from '../components/Product';

function ProductView() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]

  const filtered = products.filter(p => {
    const q = query.trim().toLowerCase()
    const matchesQuery =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    const matchesCategory = category === 'All' || p.category === category
    return matchesQuery && matchesCategory
  })

  const sorted = (() => {
    const arr = filtered.slice()
    switch (sortBy) {
      case 'price-asc':
        arr.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        arr.sort((a, b) => b.price - a.price)
        break
      case 'rating-desc':
        arr.sort((a, b) => b.rating - a.rating)
        break
      case 'reviews-desc':
        arr.sort((a, b) => b.numReviews - a.numReviews)
        break
      default:
        break
    }
    return arr
  })()

  return (
    <div>
      <h1>Latest Products</h1>

      <Form className="mb-4">
        <Row className="g-2 align-items-center">
          <Col xs={12} md={6}>
            <Form.Control
              type="text"
              placeholder="Search products by name or category..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search products"
            />
          </Col>

          <Col xs={12} md={6} className="d-flex flex-column flex-md-row align-items-center gap-2">
            <Form.Select
              value={category}
              onChange={e => setCategory(e.target.value)}
              aria-label="Filter by category"
              style={{ minWidth: 0, maxWidth: 200 }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>

            <Form.Select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              aria-label="Sort products"
              style={{ minWidth: 0, maxWidth: 220 }}
            >
              <option value="default">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="rating-desc">Rating: High → Low</option>
              <option value="reviews-desc">Reviews: High → Low</option>
            </Form.Select>

            <Button
              variant="outline-secondary"
              onClick={() => {
                setQuery('')
                setCategory('All')
                setSortBy('default')
              }}
              className="ms-md-2"
            >
              Clear
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="g-4">
        {sorted.length > 0 ? (
          sorted.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))
        ) : (
          <Col>
            <p>No products match your search.</p>
          </Col>
        )}
      </Row>
      <div className="page-bottom-spacer" />
    </div>
  )
}

export default ProductView