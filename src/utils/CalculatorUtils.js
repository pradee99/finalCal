// Function to safely evaluate mathematical expressions, including sin, cos, tan, and sqrt
export const calculateResult = (expression) => {
    // Ensure expression contains only valid characters
    const validExpression = /^[0-9+\-*/().\s√sincostan]*$/;
    
    if (!validExpression.test(expression)) {
      throw new Error('Invalid characters in expression');
    }
  
    try {
      // Convert degrees to radians for sin, cos, and tan
      expression = expression.replace(/sin\((.*?)\)/g, (_, p1) => `Math.sin((${p1}) * Math.PI / 180)`);
      expression = expression.replace(/cos\((.*?)\)/g, (_, p1) => `Math.cos((${p1}) * Math.PI / 180)`);
      expression = expression.replace(/tan\((.*?)\)/g, (_, p1) => `Math.tan((${p1}) * Math.PI / 180)`);
      
      // Replace square root function
      expression = expression.replace(/√\((.*?)\)/g, (_, p1) => `Math.sqrt(${p1})`);
  
      // Safely evaluate the expression
      return eval(expression);  // Be cautious with eval, ensure only safe input is passed
    } catch (error) {
      throw new Error('Invalid calculation');
    }
  };
