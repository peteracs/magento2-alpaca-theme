module.exports = {
  context: {
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Cart',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      text: 'Shopping Cart',
      class: 'margin-top-sm text-center'
    },
    summary: {
      heading: {
        tag: 'h2',
        attributes: 'id="summary"',
        text: 'Summary',
        class: 'cart-summary__title'
      },
      attributes: 'aria-labelledby="summary"',
      estimate: {
        tag: 'h3',
        text: 'Esimate Shipping and Tax',
        class: 'cart-summary__subtitle'
      },
      items: [
        {
          label: 'Subtotal',
          value: '$159.95'
        },
        {
          label: 'TAX',
          value: '$159.95'
        },
      ],
      total: {
        tag: 'h3',
        text: 'Order Total',
        class: 'cart-summary__title-total'
      },
      amount: '$159.95',
      button: {
        tag: 'button',
        class: 'button--fluid margin-bottom-m',
        attributes: 'type="button" aria-label="Click to go to checkout"',
        text: 'Proceed to Checkout'
      },
      link: {
        tag: 'a',
        class: 'button--link cart-summary__link',
        attributes: 'href="#" title="Check Out with Multiple Addresses"',
        text: 'Check Out with Multiple Addresses'
      }
    },
    grid: {
      header: {
        item: 'Item',
        price: 'Price',
        qty: 'Qty',
        subtotal: 'Subtotal'
      },
      items: [
        {
          qty: {
            field: {
              id: 'qty1',
            }
          }
        },
        {
          qty: {
            field: {
              id: 'qty2',
            }
          }
        },
        {
          qty: {
            field: {
              id: 'qty3',
            }
          }
        }
      ],
      updateCart: {
        class: 'button--secondary cart-grid__button margin-top-sm margin-bottom-l',
        tag: 'button',
        text: 'Update shopping cart'
      }
    },
    discount: {
      button: {
        title: 'Apply Discount Code',
        attributes: 'type="button" aria-expanded="false"'
      },
      icon: {
        id: 'angle-down',
        title: 'Arrow down',
        class: 'cart-discount__button-icon'
      },
      content: {
        attributes: 'aria-hidden="true"',
        submit: {
          tag: 'button',
          text: 'Apply Discount',
          class: 'cart-discount__content-button'
        },
        input: {
          class: 'cart-discount__content-input',
          label: {
            class: 'label--hidden'
          },
          field: {
            placeholder: 'Enter discount code',
            id: 'discount-code',
            name: 'cart-discount-code',
            class: 'cart-discount__content-field'
          }
        }
      }
    }
  }
}