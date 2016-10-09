module.exports = ({ types: t }) => {
  return {
    visitor: {
      MemberExpression(path) {
        if (path.node.computed && !(path.node.property.type === 'Identifier' && path.node.property.name === 'get')) {
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                path.node.object,
                t.identifier('get'),
                false
              ),
              [
                path.node.property,
              ]
            )
          );
        }
      },
      AssignmentExpression(path) {
        if (path.node.left.type === 'MemberExpression' && path.node.left.computed) {
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                path.node.left.object,
                t.identifier('set'),
                false
              ),
              [
                path.node.left.property,
                path.node.right,
              ]
            )
          );
        }
      }
    }
  };
};
