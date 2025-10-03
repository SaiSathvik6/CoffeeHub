import React from "react";
import { useCart } from "./CartContext";
import { Box, Typography, List, ListItem, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";

import { motion, AnimatePresence } from "framer-motion";


const Order = () => {
  const  { cart, updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price*item.quantity,0);

  return (
    <Box id="orders" sx={{ my: '5rem', mx: '5rem', p: 3, textAlign: 'center'  }}>
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      {cart.length === 0 ? (
        <Typography>No items in cart.</Typography>
      ) : (
        <>
          <List>
            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}   // start slightly left & invisible
                  animate={{ opacity: 1, x: 0 }}     // slide in from left
                  exit={{ opacity: 0, x: -100 }}      // slide out to left when removed
                  transition={{ duration: 0.3 }}
                >
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>
                      {item.title} - ${item.price.toFixed(2)}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Remove />
                      </IconButton>

                      <Typography>{item.quantity}</Typography>

                      <IconButton
                        size="small"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Add />
                      </IconButton>

                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  </ListItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${total.toFixed(2)}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Order;