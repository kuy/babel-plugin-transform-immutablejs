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
        } else if (path.node.property.type === 'Identifier' && path.node.property.name === 'length') {
          path.replaceWith(
            t.memberExpression(
              path.node.object,
              t.identifier('size'),
              false
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
      },
      ArrayExpression(path) {
        path.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.memberExpression(
                t.identifier('Immutable'),
                t.identifier('List'),
                false
              ),
              t.identifier('of'),
              false
            ),
            path.node.elements
          )
        );
      },
      ObjectExpression(path) {
        if (!isWrappedImmutableMap(path)) {
          path.replaceWith(
            t.callExpression(
              t.memberExpression(
                t.identifier('Immutable'),
                t.identifier('Map'),
                false
              ),
              [
                path.node,
              ]
            )
          );
        }
      }
    }
  };

  function isWrappedImmutableMap(path) {
    const node = path.parentPath.node;
    return node.type === 'CallExpression' && 
      node.callee.type === 'MemberExpression' && 
        node.callee.object.type   === 'Identifier' && node.callee.object.name   === 'Immutable' &&
        node.callee.property.type === 'Identifier' && node.callee.property.name === 'Map';
  }
};
