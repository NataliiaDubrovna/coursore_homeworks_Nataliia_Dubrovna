function toggle(demo) {
    if (demo.readOnly) demo.checked=demo.readOnly=false;
    else if (!demo.checked) demo.readOnly=demo.indeterminate=true;
  }